// components/LanguageSwitch.js
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Component Styles/LanguageSwitch.module.css'

const LanguageSwitch = () => {
  const router = useRouter()
  const { locale, pathname, asPath, query } = router

  const switchLanguage = (newLocale) => {
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  return (
    <div className={styles.languageSwitch}>
      <button
        className={`${styles.langButton} ${locale === 'bg' ? styles.active : ''}`}
        onClick={() => switchLanguage('bg')}
      >
        BG
      </button>
      <span className={styles.separator}>|</span>
      <button
        className={`${styles.langButton} ${locale === 'en' ? styles.active : ''}`}
        onClick={() => switchLanguage('en')}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitch
