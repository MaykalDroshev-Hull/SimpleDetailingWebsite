import styles from '../styles/Image.module.css'

const Image = (props) => {
  return (
    <div className={styles.images}>
      <div>
        <img src={props.image1} alt="" />
      </div>
      <div>
        <img src={props.image2} alt="" />
      </div>
    </div>
  )
}

export default Image