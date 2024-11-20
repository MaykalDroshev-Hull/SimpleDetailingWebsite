import Meta from "@/components/Page Components/Meta"
import PageTitle from "@/components/Page Components/PageTitle"
import styles from '../styles/Page Styles/About.module.css'
import AboutCarousel from "@/components/Page Components/AboutCarousel"
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


/**
 * Functional component for the About page of Gentry's Auto Detailing website.
 * Displays information about the business owner, Lily Gentry, and her passion for auto detailing.
 * Includes a meta tag for search engine optimization, a page title, and a container with an image and text.
 * @returns {JSX.Element} The About page JSX component.
 */
const about = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Meta
        title={t("About")}
        description="Научете за нашата страст към автомобилните детайли и ангажимента за качествено обслужване в Gentry's Auto Detailing. Нашият опитен екип е посветен на предоставянето на първокласни интериорни и екстериорни детайли, корекция на боя, керамично покритие и др. Свържете се с нас днес, за да си уговорите среща и да изпитате разликата от работата с екип, който наистина се грижи за външния вид и дълготрайността на вашия автомобил"
        keywords="auto detailing, car detailing, paint correction, ceramic coating, interior detailing, exterior detailing, car care, auto appearance, auto restoration, professional detailing"
      />
      <PageTitle title={t("About")} />
      <div className={styles.container}>
        <AboutCarousel />  
        <p>
        {t("ForMe")}        
        </p>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
export default about