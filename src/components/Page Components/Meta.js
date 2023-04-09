import Head from "next/head"

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: `Gentry's Auto Detailing`,
  keywords: 'Car detailing, Auto detailing, Car cleaning, Car polishing, Paint correction, Ceramic coating, Car wash, Mobile detailing, Interior detailing, Exterior detailing, Waxing, Buffing, Upholstery Cleaning, Headlight Restoration, Detailing Packages, Detailing Services, Car Care Tips, Detailing Supplies, Detailing Equipment',
  description: `Gentry's Auto Detailing provides professional auto detailing services to help keep your vehicle looking its best. We offer a range of packages to suit your needs, including interior and exterior detailing, paint correction, ceramic coating, and more. Contact us today to schedule an appointment.`
}

export default Meta