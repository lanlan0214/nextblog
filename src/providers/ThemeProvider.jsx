"use client"

import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

const ThemeProvider = ({ children }) => {

  const { theme } = useContext(ThemeContext)
  //如果瀏覽器有錯用這
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    return (
      <div className={theme}>
        {children}
      </div>
    )
  }
}

export default ThemeProvider;
