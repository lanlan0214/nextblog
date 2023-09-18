"use client"

import React from 'react';
import styles from "./pagination.module.css";
import { useRouter } from 'next/navigation';

// 分頁組件，顯示上一頁和下一頁的按鈕
const Pagination = ({ page, hasPrev, hasNext }) => {

  // 使用 useRouter 來獲取路由器
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* 上一頁按鈕，如果沒有上一頁則禁用 */}
      <button className={styles.button} disabled={!hasPrev} onClick={() => router.push(`?page=${page - 1}`)}>上一頁</button>
      {/* 下一頁按鈕，如果沒有下一頁則禁用 */}
      <button className={styles.button} disabled={!hasNext} onClick={() => router.push(`?page=${page + 1}`)}>下一頁</button>
    </div>
  )
}

export default Pagination;
