import styles from '../styles/PageTitle.module.css'

const PageTitle = ({ title }) => {
  return (
    <div className={styles.outerDiv}>
      <h1>{title}</h1>
    </div>
  )
}

export default PageTitle