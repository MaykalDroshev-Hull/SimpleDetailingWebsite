//Need to update this once it's properly connected to a server
import { useEffect, useState } from 'react'
import {
  useBreakpointValue,
  Card,
  CardBody,
  Flex,
  Heading,
  SimpleGrid,
  useDisclosure,
  Text
} from '@chakra-ui/react'
import { PrismaClient } from '@prisma/client'
import Meta from '@/components/Page Components/Meta'
import PageTitle from '@/components/Page Components/PageTitle'
import ReviewForm from '@/components/Form Components/ReviewForm'
import buttonStyles from '../styles/Component Styles/FlowButton.module.css'
import { color } from 'framer-motion'

const reviews = ({ data }) => {
  const [entries, setEntries] = useState(data)
  const cardWidth = useBreakpointValue({ base: '100%', md: 'minmax(700px, 1fr)' })
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Meta
        title='Reviews'
        description="Discover what our satisfied customers have to say about Gentry's Auto Detailing's professional detailing services. Read our reviews and see why we're the go-to choice for car owners in the area. From interior and exterior detailing to paint correction and ceramic coating, we pride ourselves on providing the highest quality service. Contact us today to experience it for yourself."
        keywords="auto detailing reviews, car detailing reviews, customer testimonials, reviews, testimonials, satisfied customers, auto detailing service, car detailing service, paint correction, ceramic coating, interior detailing, exterior detailing, car care, auto appearance, auto restoration, ratings and reviews, review platform (e.g. Yelp, Google Reviews)"
      />
      <PageTitle title='reviews' />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '15px',
        fontSize: '18px',
        fontWeight: '500',
        color: 'gray'
      }}>
        <p>
          Submit a review here or on <a style={{fontWeight: '900', textDecoration: 'underline'}} href='https://www.facebook.com/GentrysAutoDetailing'>Facebook</a>!
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={onOpen} className={buttonStyles.button}> Submit a Review!</button>
        <ReviewForm isOpen={isOpen} onClose={onClose} />
      </div>
      <Flex justifyContent='center'>
        <SimpleGrid spacing={4} gridTemplateColumns={`repeat(auto-fit, ${cardWidth})`}>
          {data.map((review) => (
            <Card key={review.id} padding={4} margin={4}>
              <Heading size='lg'>{review.firstName} {review.lastName}</Heading>
              <CardBody>
                <Text>
                  {review.reviewText}
                </Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    </>
  )
}

export async function getServerSideProps() {
  const prisma = new PrismaClient()
  const data = await prisma.review.findMany()

  return { props: { data } }
}

export default reviews