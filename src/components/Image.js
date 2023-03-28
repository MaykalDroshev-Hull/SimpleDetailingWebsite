import styles from '../styles/Image.module.css'

const Image = (props) => {
  return (
    <div className={styles.images}>
      <div>
        <img src={props.image} alt="" />
      </div>
    </div>
  )
}

export default Image