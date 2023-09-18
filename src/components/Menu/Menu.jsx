import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>最熱門的文章</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>按主題探索</h2>
      <h1 className={styles.title}>分類</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>編輯精選</h2>
      <h1 className={styles.title}>編輯推薦</h1>
      <MenuPosts withImage={true} />
    </div>
  )
}

export default Menu
