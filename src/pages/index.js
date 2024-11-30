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
const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Meta />
      <div className={styles.content}>
        
      </div>
    </>
  );
};

export default Home;
