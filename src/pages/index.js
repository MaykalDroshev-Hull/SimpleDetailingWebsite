import { useDisclosure } from '@chakra-ui/react'
import Meta from '@/components/Page Components/Meta'
import styles from '../styles/Page Styles/Index.module.css'
import buttonStyles from '../styles/Component Styles/FlowButton.module.css'
import Link from "next/link";

/**
 * Modern Home component that renders the homepage of the website.
 * @returns {JSX.Element} The JSX element to be rendered.
 */
const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Meta />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img
            src="/Images/index/hero-image.jpg"
            alt="Luxury Car Detailing"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Перфектна чистота и защита
              <span className={styles.heroSubtitle}>защото Вашата кола е специална!</span>
            </h1>
            <p className={styles.heroDescription}>
              Вашето място - Вашият автомобил!
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact">
                <button className={`${buttonStyles.button} ${styles.primaryButton}`}>
                  Запазете Час
                </button>
              </Link>
              <Link href="/services">
                <button className={styles.secondaryButton}>
                  Нашите Услуги
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>Защо избираме съвършенството</h2>
              <p className={styles.aboutDescription}>
                Независимо дали търсите интериорен или екстериорен детайлинг, ние сме посветени на предоставянето на услуги от най-висок клас, съобразени с нуждите на вашия автомобил. С внимание към всеки детайл, ние гарантираме безупречни резултати, които възвръщат блясъка и придават стойност на вашето превозно средство.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🚗</div>
              <h3>Екстериорен детайлинг</h3>
              <p>Защита и блясък без компромиси! Премахваме драскотини, следи от окисляване и други дефекти, за да възвърнем перфектния външен вид на вашия автомобил.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🛋️</div>
              <h3>Интериорен детайлинг</h3>
              <p>Чистота, защита и комфорт в перфектна хармония! Превърнете интериора на вашия автомобил в оазис на свежест и стил.</p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>✨</div>
              <h3>Керамични покрития</h3>
              <p>Дълготрайна защита с керамични покрития за кожен салон и пластмаси – защита от износване, замърсявания и UV лъчи.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.featuresContent}>
            <div className={styles.featuresList}>
              <h3>Нашите предимства</h3>
              <ul>
                <li>Прецизно почистване и кондициониране на кожени и текстилни материали</li>
                <li>Импрегниране и защита на текстилни салони</li>
                <li>Дезинфекция с озон – премахване на бактерии и алергени</li>
                <li>Модерно оборудване и професионални продукти</li>
              </ul>
            </div>
            <div className={styles.featuresImage}>
              <img src="/Images/index/AMG-Interior.jpg" alt="Interior Detailing" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Защо нас?</h2>
          <div className={styles.whyChooseGrid}>
            <div className={styles.whyChooseCard}>
              <div className={styles.cardImage}>
                <img src="/Images/index/AMG-Interior.jpg" alt="Quality Service" />
              </div>
              <div className={styles.cardContent}>
                <h3>Висококачествено обслужване</h3>
                <p>
                  Предлагаме първокласни детайлинг услуги, съобразени с нуждите на вашия автомобил.
                  Нашият екип гарантира внимание към всеки детайл за постигане на изключителни резултати.
                </p>
              </div>
            </div>
            
            <div className={styles.whyChooseCard}>
              <div className={styles.cardImage}>
                <img src="/Images/index/MB-Garage.jpg" alt="Trusted Professionals" />
              </div>
              <div className={styles.cardContent}>
                <h3>Потвърден професионализъм</h3>
                <h4>Доверието говори вместо нас</h4>
                <p>
                  С години усъвършенстване и внимание към детайла. Доверете се на екип, който комбинира опит, прецизност и страст към съвършенството. Вашият автомобил е в сигурни ръце!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Готови сте да превърнем вашия автомобил?</h2>
            <p>Свържете се с нас днес за безплатна консултация</p>
            <Link href="/contact">
              <button className={`${buttonStyles.button} ${styles.ctaButton}`}>
                Свържете се сега
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
