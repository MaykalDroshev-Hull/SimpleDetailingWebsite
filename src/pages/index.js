import { useDisclosure } from '@chakra-ui/react'
import Meta from '@/components/Meta'
import Form from '@/components/QuickForm'
import ImageCarousel from "@/components/ImageCarousel"
import styles from '../styles/Index.module.css'
import buttonStyles from '../styles/FlowButton.module.css'


export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Meta />
      <div className={styles.content}>
        <ImageCarousel />
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
          <button onClick={onOpen} className={buttonStyles.button}>Book Appointment</button>
          <Form isOpen={isOpen} onClose={onClose} />
        </div>
      </div>
    </>
  )
}
