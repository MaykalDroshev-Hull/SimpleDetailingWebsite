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
          <h1>Перфектна чистота и защита – защото Вашата кола е специална!</h1>
          <p>Вашето място - Вашият автомобил!</p>
          <br />
          <Link href="/contact"><button className={buttonStyles.button}>Запазете Час</button></Link>
        </div>
      </div>
      <div className={styles.WhatWeDo}>
        <p>
          Независимо дали търсите интериорен или екстериорен детайлинг, Ние сме посветени на предоставянето на услуги от най-висок клас, съобразени с нуждите на вашия автомобил. С внимание към всеки детайл, ние гарантираме безупречни резултати, които възвръщат блясъка и придават стойност на вашето превозно средство.        </p>
        <h3>Екстериорен детайлинг – защита и блясък без компромиси!</h3>
        <p>Доверете ни се да превърнем вашия автомобил в истински шедьовър. Премахваме драскотини, следи от окисляване и други дефекти, за да възвърнем перфектния му външен вид. Със специализирани услуги като корекция на лака, керамични покрития и защита от замърсявания, гарантираме дълготрайна защита и впечатляващ резултат, който всяко превозно средство заслужава!</p>
        <h3>Интериорен детайлинг – чистота, защита и комфорт в перфектна хармония!</h3>
        <p>Превърнете интериора на вашия автомобил в оазис на свежест и стил с нашите специализирани услуги. Осигуряваме:<br/></p><ul><li>Прецизно почистване и кондициониране на кожени и текстилни материали за елегантност и дълготрайна мекота.</li><li>Керамични покрития за кожен салон и пластмаси – за защита от износване, замърсявания и UV лъчи.</li><li>Импрегниране и защита на текстилни салони – отблъскване на течности и защита от петна.</li><li>Дезинфекция с озон – премахване на бактерии, алергени и неприятни миризми за здравословна среда.</li></ul><p>Всеки детайл е важен за нас, за да се чувствате комфортно и безопасно във вашия автомобил.</p>
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
            Нашият екип гарантира внимание към всеки детайл за постигане на изключителни резултати.<br/><br/>
          </p>
          <img src="/Images/index/AMG-Interior.jpg" alt="Quality Service" className={styles.whyChooseImage} />
        </div>
        <div className={styles.textBlock}>
          <h3>Потвърден професионализъм</h3>
          <h6>Доверието говори вместо нас</h6>
          <p>     
          С години усъвършенстване и внимание към детайла. Доверете се на екип, който комбинира опит, прецизност и страст към съвършенството. Вашият автомобил е в сигурни ръце!
          </p>
          <img src="/Images/index/MB-Garage.jpg" alt="Trusted Professionals" className={styles.whyChooseImage} />
        </div>
      </div>

      {/* Full-Width Image Placeholder */}
      {/* <div className={styles.fullWidthImage}>
        <img src="/Images/index/" alt="Full-Width Placeholder" />
      </div> */}
    </>
  );
};

export default Home;
