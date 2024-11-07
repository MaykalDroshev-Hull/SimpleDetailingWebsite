import Meta from "@/components/Page Components/Meta"
import PageTitle from "@/components/Page Components/PageTitle"
import styles from '../styles/Page Styles/About.module.css'
import AboutCarousel from "@/components/Page Components/AboutCarousel"


/**
 * Functional component for the About page of Gentry's Auto Detailing website.
 * Displays information about the business owner, Lily Gentry, and her passion for auto detailing.
 * Includes a meta tag for search engine optimization, a page title, and a container with an image and text.
 * @returns {JSX.Element} The About page JSX component.
 */
const about = () => {
  return (
    <>
      <Meta
        title='За Мен'
        description="Научете за нашата страст към автомобилните детайли и ангажимента за качествено обслужване в Gentry's Auto Detailing. Нашият опитен екип е посветен на предоставянето на първокласни интериорни и екстериорни детайли, корекция на боя, керамично покритие и др. Свържете се с нас днес, за да си уговорите среща и да изпитате разликата от работата с екип, който наистина се грижи за външния вид и дълготрайността на вашия автомобил"
        keywords="auto detailing, car detailing, paint correction, ceramic coating, interior detailing, exterior detailing, car care, auto appearance, auto restoration, professional detailing"
      />
      <PageTitle title='За Мен' />
      <div className={styles.container}>
        <AboutCarousel />
        
        <p>
        Здравейте! 
Аз съм Айчин Мехмедов, детайлър с над 5 години опит в бранша. С гордост мога да споделя, че съм официално акредитиран от световноизвестната марка Gtechniq чрез нейния представител за България – Кушев детайлинг. Преминал съм и през редица курсове и обучения от най-добрите в бранша през годините.
За мен професионализмът не е просто дума, а ангажимент, който изпълнявам до последния детайл.

Ценя доверието на своите клиенти и се стремя да предложа услуги с най-високо качество, където всеки аспект е важен. Подхождам към всяко превозно средство с отговорност и грижа, като гарантирам, че докато е при мен, то е на сигурно и надеждно място. Убедени можете да бъдете, че във всеки етап на работа, от почистването до най-фините завършващи щрихи, влагам усилия и искреност. Моята цел е не просто да предоставя услуга, а да изградя доверие, базирано на честност и отдаденост.

Детайлингът не само подобрява външния вид на автомобила, но също така допринася за запазването на неговата стойност и дълготрайността му. Чистото и добре поддържано превозно средство е важно не само за комфорта, но и за здравето на своите собственици. 

За мен най-голямата награда е доволният клиент – усмивката му ми показва, че съм постигнал най-важното.        
</p>
      </div>
    </>
  )
}

export default about