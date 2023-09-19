import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

// 從 API 獲取分類數據的函數
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("獲取數據失敗");
  }

  return res.json();
};

const CategoryList = async () => {
  // 獲取分類數據
  const data = await getData();
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>熱門分類</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
