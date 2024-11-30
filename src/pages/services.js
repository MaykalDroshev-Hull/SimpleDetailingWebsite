import ServiceCarousel from "@/components/Page Components/ServicesCarousel"
import styles from '../styles/Page Styles/Services.module.css'
import servicesData from "public/Data/services.json"; // Import JS data


const Services = () => {
  return (
    <div className={styles.servicesPage}>
      <h1 className={styles.pageTitle}>Нашите Услуги</h1>
      {servicesData.map((service, index) => (
        <div
          key={service.id}
          className={`${styles.serviceSection} ${index % 2 === 0 ? styles.imageRight : styles.imageLeft
            }`}
        >
          <div className={styles.text}>
            <h2>{service.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: service.description }} />
          </div>
          <div className={styles.imagePlaceholder}>
            <ServiceCarousel images={service.images} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;