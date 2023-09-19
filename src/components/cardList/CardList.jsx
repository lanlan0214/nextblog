import React from 'react';
import styles from "./cardList.module.css";
import Pagination from '../pagination/Pagination';
import Image from 'next/image';
import Card from '../card/Card';

// 從 API 獲取博客文章數據的函數，接受頁碼（page）和類別（cat）
const getData = async (page, cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    });

  if (!res.ok) {
    throw new Error("獲取數據失敗");
  }

  return res.json();
};

// CardList 組件，顯示最近的博客文章
const CardList = async ({ page, cat }) => {

  // 從 API 獲取博客文章數據和總數
  const { posts, count } = await getData(page, cat);

  // 每頁顯示的博客文章數量
  const POST_PER_PAGE = 999;

  // 檢查是否有前一頁和下一頁的按鈕
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>最近的文章</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          // 渲染博客文章卡片
          <Card item={item} key={item._id} />
        ))}
      </div>
      {/* 顯示分頁按鈕 */}
      {/* <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} /> */}
    </div>
  )
}

export default CardList;
