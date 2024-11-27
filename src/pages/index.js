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
        <ImageCarousel />
        <div className={styles.container}>
          <p className={styles.introduction}>
          Добре дошли в сайта на Асеа-М Детайлинг! Ние сме посветени на това
           да ви предоставим най-високото ниво на обслужване и качество, когато 
           става въпрос за поддържане на перфектния вид на вашия автомобил.
            Независимо дали искате да подобрите външния вид на вашето ежедневно
             превозно средство или да подготвите автомобила си за шоу, ние разполагаме
              с уменията и опита, за да постигнем резултатите, които търсите. От вътрешно
               до външно детайлиране, предлагаме широк спектър от услуги, съобразени с вашите
                нужди. Свържете се с нас днес, за да запазите час и да усетите разликата, която
                 нашите услуги за авто детайлинг могат да направят за вашия автомобил!
          </p>

          <p>Асае-М Детайлинг</p>
          <button onClick={onOpen} className={buttonStyles.button}>Запазете Час</button>
          <Form isOpen={isOpen} onClose={onClose} />
        </div>
      </div>
    </>
  );
};

export default Home;
