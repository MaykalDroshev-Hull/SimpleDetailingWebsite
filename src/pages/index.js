import { useDisclosure } from '@chakra-ui/react'
import Meta from '@/components/Page Components/Meta'
import styles from '../styles/Page Styles/Index.module.css'
import buttonStyles from '../styles/Component Styles/FlowButton.module.css'
import Link from "next/link";

/**
 * Home component that renders the homepage of the website.
 * @returns {JSX.Element} The JSX element to be rendered.
 */
const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Meta />
      <div className={styles.heroSection}>
        <img
          src="/Images/index/hero-image.jpg"
          alt="Luxury Car Detailing"
          className={styles.heroImage}
        />
        <div className={styles.slogan}>
          <h1>Неповторимо почистване и защита за неповторими коли</h1>
          <p>Ще направим колата ви по-чиста от нова!</p>
          <br />
          <Link href="/contact"><button className={buttonStyles.button}>Запазете Час</button></Link>
        </div>
      </div>
      <div class={styles.WhatWeDo}>
        <p>
          Независимо дали търсите интериорно или екстериорно детайлиране, нашият екип е посветен на предоставянето на услуги от най-висок клас, съобразени с нуждите на вашия автомобил. С внимание към всеки детайл, ние гарантираме безупречни резултати, които възвръщат и надминават заводския вид на вашето превозно средство.
        </p>
        <h3>Екстериорен детайлинг</h3>
        <p>Нашите услуги за екстериорен детайлинг са създадени, за да предпазят и подобрят външния вид на вашия автомобил. От премахване на дефекти като надрасквания и следи от окисляване до нанасяне на защитни покрития, ние осигуряваме дълготрайна защита и невероятен блясък. Независимо дали става дума за корекция на боята, керамични покрития или защита от замърсявания, вашият автомобил ще изглежда като нов.</p>
        <h3>Интериорен детайлинг</h3>
        <p>За интериора на вашето превозно средство ние предлагаме прецизно почистване, освежаване и поддръжка на всички повърхности. От изпаряване на петна до кондициониране на кожени и текстилни материали, нашият процес е внимателен към всеки детайл, осигурявайки ви чиста, свежа и комфортна вътрешна среда.</p>
        <p>С помощта на модерно оборудване, професионални продукти и експертни техники, нашият екип трансформира вашия автомобил отвътре и отвън. Независимо дали шофирате луксозно возило или семеен автомобил, ние гарантираме персонализирано обслужване, което защитава и подобрява стойността на вашата инвестиция.</p>
      </div>

      <div className={styles.whyChooseUsHeader}>
        <h1>Защо нас?</h1>
      </div>
      {/* Why Choose Us Section */}
      <div className={styles.whyChooseUs}>

        <div className={styles.textBlock}>
          <h3>Висококачествено обслужване</h3>
          <p>
            Предлагаме първокласни детайлинг услуги, съобразени с нуждите на вашия автомобил.
            Нашият екип гарантира внимание към всеки детайл за постигане на изключителни резултати.
          </p>
          <img src="/Images/index/AMG-Interior.jpg" alt="Quality Service" className={styles.whyChooseImage} />
        </div>
        <div className={styles.textBlock}>
          <h3>Потвърден професионализъм</h3>
          <p>
            С дългогодишен опит, безброй клиенти ни се доверяват за нашето
            надеждно и професионално обслужване.<br /><br />
          </p>
          <img src="/Images/index/Camaro.jpg" alt="Trusted Professionals" className={styles.whyChooseImage} />
        </div>
      </div>

      {/* Full-Width Image Placeholder */}
      <div className={styles.fullWidthImage}>
        <img src="/Images/index/MB-Garage.jpg" alt="Full-Width Placeholder" />
      </div>
    </>
  );
};

export default Home;
