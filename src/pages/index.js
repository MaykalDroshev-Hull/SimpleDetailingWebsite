import PageTitle from "@/components/PageTitle"
import ImageCarousel from "@/components/ImageCarousel"

export default function Home() {
  return (
    <>
      <PageTitle title={`Welcome!`} />
      <br />
      <br />
      <ImageCarousel />
    </>
  )
}
