import { useEffect, useState } from 'react'
import { useMediaQuery, useBreakpointValue, Card, CardBody, Flex, Heading, SimpleGrid, useDisclosure, Text } from '@chakra-ui/react'
import { PrismaClient } from '@prisma/client'
import PageTitle from '@/components/PageTitle'
import ReviewForm from '@/components/ReviewForm'
import buttonStyles from '../styles/FlowButton.module.css'

const reviews = ({ data }) => {
  const [entries, setEntries] = useState(data)
  const cardWidth = useBreakpointValue({ base: '100%', md: 'minmax(700px, 1fr)' })
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <PageTitle title='reviews' />
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