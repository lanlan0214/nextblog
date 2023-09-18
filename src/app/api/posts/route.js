import { getAuthSession } from "@/utils/auth";  // 從 utils/auth 中匯入 getAuthSession 函式
import prisma from "@/utils/connect";  // 從 utils/connect 中匯入 prisma 實例
import { NextResponse } from "next/server";  // 從 next/server 中匯入 NextResponse 類別

// GET 請求處理函式
export const GET = async (req) => {

  const { searchParams } = new URL(req.url);  // 從請求的 URL 中獲取 searchParams

  const page = searchParams.get("page");  // 從 searchParams 中獲取名為 "page" 的參數值
  const cat = searchParams.get("cat");  // 從 searchParams 中獲取名為 "cat" 的參數值

  const POST_PER_PAGE = 2;  // 每頁顯示的文章數量

  const query = {
    take: POST_PER_PAGE,  // 取得的文章數量
    skip: POST_PER_PAGE * (page - 1),  // 要略過的文章數量，用於分頁
    where: {
      ...(cat && { catSlug: cat }),  // 如果存在 cat 參數則加入篩選條件
    },
  }

  try {
    const [posts, count] = await prisma.$transaction([

      prisma.post.findMany(query),  // 使用 query 執行查詢
      prisma.post.count({where:query.where}),  // 計算符合篩選條件的文章總數
    ])

    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }))  // 回傳包含文章列表和總數的 JSON

  } catch (err) {
    console.log(err);  // 處理錯誤，並在控制台輸出錯誤訊息
    return new NextResponse(JSON.stringify({ message: "something went wrong!" }, { status: 500 }))  // 回傳錯誤訊息
  }
}

// CREATE A POST
export const POST = async (req) => {
  const session = await getAuthSession();  // 獲取身份驗證會話

  if (!session) {  // 如果沒有會話，表示未經身份驗證
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })  // 回傳未經身份驗證的錯誤訊息
    );
  }

  try {
    const body = await req.json();  // 從請求中解析 JSON 格式的內容
    const post = await prisma.post.create({  // 創建一篇新文章
      data: { ...body, userEmail: session.user.email },  // 將身份驗證的使用者郵件地址與文章內容結合
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));  // 回傳新文章的 JSON 格式

  } catch (err) {
    console.log(err);  // 處理錯誤，並在控制台輸出錯誤訊息
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })  // 回傳錯誤訊息
    );
  }
};
