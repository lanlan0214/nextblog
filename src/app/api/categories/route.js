import prisma from "@/utils/connect";  // 從 utils/connect 中匯入 Prisma 實例
import { NextResponse } from "next/server";  // 從 next/server 中匯入 NextResponse 類別

// GET 請求處理函式
export const GET = async () => {
  try {
    // 查詢所有類別
    const categories = await prisma.category.findMany();
    // 回傳包含類別列表的 JSON 格式
    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (err) {
    console.log(err);  // 處理錯誤，並在控制台輸出錯誤訊息
    // 回傳錯誤訊息
    return new NextResponse(JSON.stringify({ message: "something went wrong!" }, { status: 500 }));
  }
}
