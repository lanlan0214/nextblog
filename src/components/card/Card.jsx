import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ key, item }) => {

  const dateSubstring = item.createdAt ? item.createdAt.substring(0, 10) : new Date().toISOString().substring(0, 10);

  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt='' fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{dateSubstring} - </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title.substring(0, 60)}</h1>
        </Link>
        <p className={styles.desc}>{item.desc}</p>
        <Link href={`/posts/${item.slug}`} className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default Card


