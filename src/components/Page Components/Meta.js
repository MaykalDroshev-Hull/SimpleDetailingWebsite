import Head from "next/head"

/**
 * Renders a <Head> component with meta tags for SEO.
 * @param {object} props - The props object.
 * @param {string} title - The title of the page.
 * @param {string} keywords - The keywords for the page.
 * @param {string} description - The description of the page.
 * @returns {JSX.Element} A <Head> component with meta tags.
 */
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/Logo-Square.png' />
      <link rel="apple-touch-icon" href="/Logo-Square-180x180.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/Logo-Square-32x32.png"/> 

      {/* For Android and Chrome use these sizes: */}
      <link rel="icon" type="image/png" sizes="48x48" href="/Logo-Square-48x48.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/Logo-Square-96x96.png"/>  
      <link rel="icon" type="image/png" sizes="192x192" href="/Logo-Square-192x192.png"/>

      {/* For iPads and iPhones use these sizes: */}
      <link rel="apple-touch-icon" type="image/png" sizes="167x167" href="/Logo-Square-167x167.png"/> 
      <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/Logo-Square-180x180.png"/>
      <title>{title}</title>
    </Head>
  )
}

//The defualt properties of the Meta tag if nothing is supplied to it
Meta.defaultProps = {
  title: `Асеа-м Детайлинг`,
  keywords: 'Car detailing, Auto detailing, Car cleaning, Car polishing, Paint correction, Ceramic coating, Car wash, Mobile detailing, Interior detailing, Exterior detailing, Waxing, Buffing, Upholstery Cleaning, Headlight Restoration, Detailing Packages, Detailing Services, Car Care Tips, Detailing Supplies, Detailing Equipment',
  description: `Gentry's Auto Detailing provides professional auto detailing services to help keep your vehicle looking its best. We offer a range of packages to suit your needs, including interior and exterior detailing, paint correction, ceramic coating, and more. Contact us today to schedule an appointment.`
}

export default Meta