import { useDisclosure } from '@chakra-ui/react'
import Meta from '@/components/Page Components/Meta'
import Form from '@/components/Form Components/QuickForm'
import ImageCarousel from "@/components/Page Components/ImageCarousel"
import styles from '../styles/Page Styles/Index.module.css'
import buttonStyles from '../styles/Component Styles/FlowButton.module.css'

/**
 * Home component that renders the homepage of the website.
 * @returns {JSX.Element} The JSX element to be rendered.
 */
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Meta />
      <div className={styles.content}>
        <ImageCarousel />
        <div className={styles.container}>
          <h1>WELCOME!</h1>
          <p className={styles.introduction}>
          Welcome to Gentry's Auto Detailing website! We are dedicated to providing you with the highest level of service and quality
          when it comes to keeping your vehicle looking its best. Whether you're looking to improve the appearance of your daily 
          driver or preparing your show car for competition, we have the skills and expertise to deliver the results you're looking for. 
          From interior to exterior detailing, we offer a wide range of services designed to meet your specific needs. Contact us today to 
          schedule an appointment and experience the difference that our auto detailing services can make for your vehicle
          </p>
          <button onClick={onOpen} className={buttonStyles.button}>Book Appointment</button>
          <Form isOpen={isOpen} onClose={onClose} />
          <p className={styles.disclaimer}>*We are not a mobile auto detailing company*</p>
        </div>
      </div>
    </>
  )
}
