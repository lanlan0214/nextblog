import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '../pagination/Pagination'

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/categories`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed")
  }

  return res.json()
}

const CategoryList = async ({ page, cat }) => {

  const { posts, count } = await getData(page, cat)

  const POST_PER_PAGE = 2

  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count

  const data = await getData()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map(item => (
          <Link href={`/blog?cat=${item.slug}`} className={`${styles.category} ${styles[item.slug]}`} key={item._id}>
            {item.img && (<Image src={item.img} alt='' width={32} height={32} className={styles.image} />)}
            {item.title}
          </Link>
        ))}
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      </div>
    </div>
  )
}

export default CategoryList
