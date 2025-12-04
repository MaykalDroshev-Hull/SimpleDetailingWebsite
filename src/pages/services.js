import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Meta from "@/components/Page Components/Meta"
import ServiceCarousel from "@/components/Page Components/ServicesCarousel"
import styles from '../styles/Page Styles/Services.module.css'
import { useRouter } from 'next/router'

const Services = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  
  // Dynamically import services data based on language
  const servicesData = locale === 'en' 
    ? require('../../public/Data/services-en.json')
    : require('../../public/Data/services.json')
  
  return (
    <>
      <Meta
        title={`${t('Services')} - ${t('BusinessName')}`}
        description="Професионални автомобилни детайлинг услуги: корекция на лака, керамични покрития, интериорно почистване, корекция на фарове и стопове. Качествено обслужване с гаранция."
        keywords="auto detailing services, car detailing, paint correction, ceramic coating, interior detailing, headlight restoration, brake light restoration, car wash, professional detailing"
      />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>{t('ServicesHeroTitle')}</h1>
              <p className={styles.heroSubtitle}>
                {t('ServicesHeroSubtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {servicesData.map((service, index) => (
              <div key={service.id} className={styles.serviceCard}>
                {service.isNew && (
                  <div className={styles.newSticker}>
                    {locale === 'en' ? 'NEW' : 'НОВО'}
                  </div>
                )}
                <div className={styles.cardImage}>
                  <ServiceCarousel images={service.images} />
                </div>
                <div className={styles.cardContent}>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                  <div 
                    className={styles.serviceDescription}
                    dangerouslySetInnerHTML={{ __html: service.description }} 
                  />
                </div>
              </div>
            ))}
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

export default Services;