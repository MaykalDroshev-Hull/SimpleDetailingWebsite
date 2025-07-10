import Meta from "@/components/Page Components/Meta"
import PageTitle from "@/components/Page Components/PageTitle"
import styles from '../styles/Page Styles/About.module.css'

/**
 * Modern About page component showcasing the business owner and expertise.
 * @returns {JSX.Element} The About page JSX component.
 */
const about = () => {
  return (
    <>
      <Meta
        title="За Мен - Aseam Auto Detailing"
        description="Научете за нашата страст към автомобилните детайли и ангажимента за качествено обслужване. Нашият опитен екип е посветен на предоставянето на първокласни интериорни и екстериорни детайли, корекция на боя, керамично покритие и др."
        keywords="auto detailing, car detailing, paint correction, ceramic coating, interior detailing, exterior detailing, car care, auto appearance, auto restoration, professional detailing"
      />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>За Мен</h1>
              <p className={styles.heroSubtitle}>
                Професионализъм, опит и страст към съвършенството
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
                  src='/Images/About Slider Images/Slider_Image_1.jpg' 
                  alt='Aseam Auto Detailing - Professional Car Detailing' 
                  className={styles.aboutImage}
                />
              </div>
            </div>

            {/* About Text */}
            <div className={styles.textSection}>
              <div className={styles.aboutContent}>
                <h2 className={styles.aboutTitle}>Айчин Мехмедов</h2>
                <h3 className={styles.aboutSubtitle}>Професионален детайлър</h3>
                
                <div className={styles.aboutText}>
                  <p>
                    Здравейте! Аз съм Айчин Мехмедов, детайлър с над 5 години опит в бранша. 
                    С гордост мога да споделя, че съм официално акредитиран от световноизвестната 
                    марка <strong>Gtechniq</strong> чрез нейния представител за България – 
                    <strong> Кушев детайлинг</strong>.
                  </p>
                  
                  <p>
                    Преминал съм и през редица курсове и обучения от най-добрите в бранша през годините. 
                    За мен професионализмът не е просто дума, а ангажимент, който изпълнявам до последния детайл.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className={styles.valuesSection}>
            <h2 className={styles.sectionTitle}>Нашите Ценности</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🎯</div>
                <h3>Професионализъм</h3>
                <p>Ангажимент към най-високите стандарти в детайлинг индустрията</p>
              </div>
              
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🤝</div>
                <h3>Доверие</h3>
                <p>Ценя доверието на своите клиенти и се стремя да предложа услуги с най-високо качество</p>
              </div>
              
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>✨</div>
                <h3>Съвършенство</h3>
                <p>Подхождам към всяко превозно средство с отговорност и грижа</p>
              </div>
            </div>
          </div>

          {/* Additional Image Section 1 */}
          <div className={styles.additionalImageSection}>
            <div className={styles.imageWrapper}>
              <img 
                src='/Images/About Slider Images/Slider_Image_2.jpg' 
                alt='Professional Car Detailing Process' 
                className={styles.aboutImage}
              />
            </div>
          </div>

          {/* Detailed About Section */}
          <div className={styles.detailedSection}>
            <div className={styles.detailedContent}>
              <h2>Защо избираме качеството</h2>
              <p>
                Ценя доверието на своите клиенти и се стремя да предложа услуги с най-високо качество, 
                където всеки аспект е важен. Подхождам към всяко превозно средство с отговорност и грижа, 
                като гарантирам, че докато е при мен, то е на сигурно и надеждно място.
              </p>
              
              <p>
                Убедени можете да бъдете, че във всеки етап на работа, от почистването до най-фините 
                завършващи щрихи, влагам усилия и искреност. Моята цел е не просто да предоставя услуга, 
                а да изградя доверие, базирано на честност и отдаденост.
              </p>
              
              <p>
                Детайлингът не само подобрява външния вид на автомобила, но също така допринася за 
                запазването на неговата стойност и дълготрайността му. Чистото и добре поддържано 
                превозно средство е важно не само за комфорта, но и за здравето на своите собственици.
              </p>
              
              <div className={styles.quote}>
                <p>
                  "За мен най-голямата награда е доволният клиент – усмивката му ми показва, 
                  че съм постигнал най-важното."
                </p>
                <span className={styles.quoteAuthor}>— Айчин Мехмедов</span>
              </div>
            </div>
          </div>

          {/* Additional Image Section 2 */}
          <div className={styles.additionalImageSection}>
            <div className={styles.imageWrapper}>
              <img 
                src='/Images/About Slider Images/Slider_Image_3.jpg' 
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

export default about