//Need info from Lily
import Meta from "@/components/Meta"
import PageTitle from "@/components/PageTitle"
import styles from '../styles/About.module.css'

const about = () => {
  return (
    <>
      <Meta
        title='About'
        description="Learn about our passion for auto detailing and commitment to quality service at Gentry's Auto Detailing. Our experienced team is dedicated to providing top-notch interior and exterior detailing, paint correction, ceramic coating, and more. Contact us today to schedule an appointment and experience the difference of working with a team that truly cares about your car's appearance and longevity."
        keywords="auto detailing, car detailing, paint correction, ceramic coating, interior detailing, exterior detailing, car care, auto appearance, auto restoration, professional detailing"
      />
      <PageTitle title='About Me' />
      <div className={styles.container}>
        <img className={styles.lilyImage} src='/Images/lily.jpeg' alt='Lily Image' />
        <p>
          My name is Lily Gentry. I am a student at Douglas Southall Freeman High School
          and am saving money for college. Cleaning has always been a passion of mine, so I began
          this business. Family and friends are always asking for my services, so I decided it would 
          be a great idea to spread the joy of a spotless car! Just wait until you see how much less
          stress a clean car can be!
        </p>
      </div>
    </>
  )
}

export default about