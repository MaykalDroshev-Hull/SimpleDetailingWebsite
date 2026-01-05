import { useDisclosure } from '@chakra-ui/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Meta from '@/components/Page Components/Meta'
import styles from '../styles/Page Styles/Index.module.css'
import buttonStyles from '../styles/Component Styles/FlowButton.module.css'
import Link from "next/link";
import ServiceCarousel from "@/components/Page Components/ServicesCarousel"

/**
 * Modern Home component that renders the homepage of the website.
 * @returns {JSX.Element} The JSX element to be rendered.
 */
const Home = () => {
  const { t } = useTranslation('common')
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Meta
        title={`${t('BusinessName')} - ${t('Home')}`}
        description={t('AboutDescription')}
        keywords="auto detailing, car detailing, paint correction, ceramic coating, interior detailing, exterior detailing, car care, auto appearance, auto restoration"
      />

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
              {t('HeroTitle')}
              <span className={styles.heroSubtitle}>{t('HeroSubtitle')}</span>
            </h1>
            <p className={styles.heroDescription}>
              {t('HeroDescription')}
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact">
                <button className={`${buttonStyles.button} ${styles.primaryButton}`}>
                  {t('BookAppointment')}
                </button>
              </Link>
              <Link href="/services">
                <button className={styles.secondaryButton}>
                  {t('Services')}
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
              <h2 className={styles.sectionTitle}>{t('AboutTitle')}</h2>
              <p className={styles.aboutDescription}>
                {t('AboutDescription')}
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
              <div className={styles.serviceIcon}></div>
              <h3>{t('ExteriorDetailing')}</h3>
              <p>{t('ExteriorDescription')}</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}></div>
              <h3>{t('InteriorDetailing')}</h3>
              <p>{t('InteriorDescription')}</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}></div>
              <h3>{t('CeramicCoatings')}</h3>
              <p>{t('CeramicDescription')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.featuresContent}>
            <div className={styles.featuresList}>
              <h3>{t('OurAdvantages')}</h3>
              <ul>
                <li>{t('Advantage1')}</li>
                <li>{t('Advantage2')}</li>
                <li>{t('Advantage3')}</li>
                <li>{t('Advantage4')}</li>
                <li>{t('Advantage5')}</li>
              </ul>
            </div>
            <div className={styles.featuresImage}>
              <img src="/Images/index/ASEAM_AP-18.jpg" alt="Interior Detailing" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t('WhyChooseUs')}</h2>
          <div className={styles.whyChooseGrid}>
            <div className={styles.whyChooseCard}>
              <div className={styles.cardImage}>
                <ServiceCarousel images={[{
                  "src": "/Images/index/ASEAM_AP-16.jpg",
                  "alt": "Why Choose Us Image 1"
                },
                {
                  "src": "/Images/index/ASEAM_AP-17.jpg",
                  "alt": "Why Choose Us Image 2"
                },
                {
                  "src": "/Images/index/ASEAM_AP-67.jpg",
                  "alt": "Why Choose Us Image 3"
                }]} />
              </div>
              <div className={styles.cardContent}>
                <h3>{t('QualityService')}</h3>
              </div>
            </div>

            <div className={styles.whyChooseCard}>
              <div className={styles.cardImage}>
                <ServiceCarousel images={[{
                  "src": "/Images/index/ASEAM_AP-126.jpg",
                  "alt": "Why Choose Us Image 1"
                },
                {
                  "src": "/Images/index/ASEAM_AP-130.jpg",
                  "alt": "Why Choose Us Image 2"
                },
                {
                  "src": "/Images/index/ASEAM_AP-139.jpg",
                  "alt": "Why Choose Us Image 3"
                }]} />
              </div>
              <div className={styles.cardContent}>
                <h3>{t('TrustedProfessionals')}</h3>
              </div>
            </div>
          </div>
          <div className={styles.rewardBadge}>
            <p className={styles.awardText}>{t('AwardText')}</p>
            <a href="https://www.zlatnafirma.eu/company/asea-m-detailing-1213837" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://www.zlatnafirma.eu/company-image/1213837-white.png" 
                alt="ASEA-M Detailing - Ловеч" 
                title="ASEA-M Detailing - Ловеч"
              />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>{t('CTATitle')}</h2>
            <p>{t('CTADescription')}</p>
            <Link href="/contact">
              <button className={`${buttonStyles.button} ${styles.ctaButton}`}>
                {t('ContactUsNow')}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Home;
