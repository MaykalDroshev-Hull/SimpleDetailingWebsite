import { useState } from 'react'
import Form from '@/components/Form'
import ImageCarousel from "@/components/ImageCarousel"
import styles from '../styles/Index.module.css'

export default function Home() {
  const [openForm, setOpenForm] = useState(false)

  const handleClick = () => setOpenForm(prev => !prev)

  const handleFormSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <>
      <div className={styles.content}>
        <ImageCarousel />
        <hr className={styles.divider} />
        <div className={styles.container}>
          <h1>WELCOME!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button onClick={handleClick} className={styles.button}>Book Appointment</button>
          {openForm && <Form
            onClick={handleClick}
            onSubmit={handleFormSubmit}
          />}
        </div>
      </div>
    </>
  )
}
