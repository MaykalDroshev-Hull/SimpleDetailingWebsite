import styles from '../../styles/Component Styles/PageTitle.module.css'

const PageTitle = ({ title }) => {
  return (
    <div className={styles.outerDiv}>
      <h1>{title}</h1>
    </div>
  )
}

export default PageTitle