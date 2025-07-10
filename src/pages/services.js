import Meta from "@/components/Page Components/Meta"
import ServiceCarousel from "@/components/Page Components/ServicesCarousel"
import styles from '../styles/Page Styles/Services.module.css'
import servicesData from "public/Data/services.json"

const Services = () => {
  return (
    <>
      <Meta
        title="Услуги - Aseam Auto Detailing"
        description="Професионални автомобилни детайлинг услуги: корекция на лака, керамични покрития, интериорно почистване, корекция на фарове и стопове. Качествено обслужване с гаранция."
        keywords="auto detailing services, car detailing, paint correction, ceramic coating, interior detailing, headlight restoration, brake light restoration, car wash, professional detailing"
      />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Нашите Услуги</h1>
              <p className={styles.heroSubtitle}>
                Професионални детайлинг услуги с внимание към всеки детайл
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

export default Services;