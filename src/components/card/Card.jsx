import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

// Card 組件接受兩個屬性：key 和 item
const Card = ({ key, item }) => {

  // 從 item 中提取創建日期，並將其格式化為 "YYYY-MM-DD" 的子字串
  const dateSubstring = item.createdAt ? item.createdAt.substring(0, 10) : new Date().toISOString().substring(0, 10);

  return (
    <div className={styles.container} key={key}>
      {/* 如果有圖像 (img) 屬性，顯示圖像 */}
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt='' fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          {/* 顯示日期和類別 */}
          <span className={styles.date}>{dateSubstring} - </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        {/* 創建一個連結到文章詳情頁的標題 */}
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title.substring(0, 60)}</h1>
        </Link>
        {/* 顯示文章描述 */}
        <p className={styles.desc}>{item.desc}</p>
        {/* 創建一個連結到文章詳情頁的 "閱讀更多" 連結 */}
        <Link href={`/posts/${item.slug}`} className={styles.link}>閱讀更多</Link>
      </div>
    </div>
  )
}

export default Card;
