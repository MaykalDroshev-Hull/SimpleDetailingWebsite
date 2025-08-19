import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Meta from "@/components/Page Components/Meta"
import PageTitle from "@/components/Page Components/PageTitle"
import styles from '../styles/Page Styles/About.module.css'

/**
 * Modern About page component showcasing the business owner and expertise.
 * @returns {JSX.Element} The About page JSX component.
 */
const about = () => {
  const { t } = useTranslation('common')
  
  return (
    <>
      <Meta
        title={`${t('About')} - ${t('BusinessName')}`}
        description={t('ForMeIntro')}
        keywords="auto detailing, car detailing, paint correction, ceramic coating, interior detailing, exterior detailing, car care, auto appearance, auto restoration, professional detailing"
      />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>{t('AboutHeroTitle')}</h1>
              <p className={styles.heroSubtitle}>
                {t('AboutHeroSubtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          
          {/* About Content Grid */}
          <div className={styles.contentGrid}>
            
            {/* Single Image */}
            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                <img 
                  src='/Images/About Slider Images/ASEAM_AP-73.jpg' 
                  alt='Aseam Auto Detailing - Professional Car Detailing' 
                  className={styles.aboutImage}
                />
              </div>
            </div>

            {/* About Text */}
            <div className={styles.textSection}>
              <div className={styles.aboutContent}>
                <h2 className={styles.aboutTitle}>{t('AboutName')}</h2>
                <h3 className={styles.aboutSubtitle}>{t('AboutProfession')}</h3>
                
                <div className={styles.aboutText}>
                  <p>
                    {t('ForMeIntro')}
                  </p>
                  
                  <p>
                    {t('ForMeExperience')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className={styles.valuesSection}>
            <h2 className={styles.sectionTitle}>{t('AboutValuesTitle')}</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🎯</div>
                <h3>{t('Value1Title')}</h3>
                <p>{t('Value1Description')}</p>
              </div>
              
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🤝</div>
                <h3>{t('Value2Title')}</h3>
                <p>{t('Value2Description')}</p>
              </div>
              
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>✨</div>
                <h3>{t('Value3Title')}</h3>
                <p>{t('Value3Description')}</p>
              </div>
            </div>
          </div>

          {/* Additional Image Section 1 */}
          <div className={styles.additionalImageSection}>
            <div className={styles.imageWrapper}>
              <img 
                src='/Images/About Slider Images/ASEAM_AP-71.jpg' 
                alt='Professional Car Detailing Process' 
                className={styles.aboutImage}
              />
            </div>
          </div>

          {/* Detailed About Section */}
          <div className={styles.detailedSection}>
            <div className={styles.detailedContent}>
              <h2>{t('AboutDetailedTitle')}</h2>
              <p>
                {t('ForMeTrust')}
              </p>
              
              <p>
                {t('ForMeCommitment')}
              </p>
              
              <p>
                {t('ForMeValue')}
              </p>
              
              <div className={styles.quote}>
                <p>
                  "{t('ForMeQuote')}"
                </p>
                <span className={styles.quoteAuthor}>— {t('AboutName')}</span>
              </div>
            </div>
          </div>

          {/* Additional Image Section 2 */}
          <div className={styles.additionalImageSection}>
            <div className={styles.imageWrapper}>
              <img 
                src='/Images/About Slider Images/ASEAM_AP-70.jpg' 
                alt='Car Detailing Results and Quality' 
                className={styles.aboutImage}
              />
            </div>
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

export default about