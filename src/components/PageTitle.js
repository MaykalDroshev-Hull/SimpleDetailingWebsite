import { useState, useEffect } from 'react'
import styles from '../styles/PageTitle.module.css'

const PageTitle = ({ title }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className={styles.div}>
      <h1 className={`${styles.h1} ${isMounted ? styles['fade-in'] : ''}`}>
        {title}
      </h1>
    </div>
  )
}

export default PageTitle