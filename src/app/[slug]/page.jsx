import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'
import Comments from '@/components/Comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt='' fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Frank FK</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
              TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
              TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
              TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
            </p>
            <h2>
              很多內容阿!!我眼花了
            </h2>
            <p>
              TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
              TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
              TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
              TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
            </p>
            <p>
              TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
              TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
              TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
              TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
