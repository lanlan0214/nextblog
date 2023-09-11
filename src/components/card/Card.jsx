import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt='' fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span>date</span>
          <span className={styles.date}>10.09.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>Title</h1>
        </Link>
        <p className={styles.desc}>desc</p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default Card
