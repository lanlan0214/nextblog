import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from './menuPosts.module.css'

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/topposts`,
    {
      cache: "no-store",
    });

  if (!res.ok) {
    throw new Error("獲取數據失敗");
  }

  return res.json();
};

const MenuPosts = async ({ withImage }) => {

  const data = await getData();

  return (
    <div className={styles.items}>
      {data?.map((item) => (
        <Link href={`/posts/${item.title}`} className={styles.item} key={item._id}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src={item.img} alt='' fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>{item.catSlug}</span>
            <h3 className={styles.postTitle}>{item.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{`${item._id}`}</span>
              <span className={styles.date}> - 10.030.2023</span>
            </div>
          </div>
        </Link>))}
    </div>
  )
}

export default MenuPosts
