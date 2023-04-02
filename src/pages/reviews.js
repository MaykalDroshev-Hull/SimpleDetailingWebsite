import { Button, useDisclosure } from '@chakra-ui/react'
import PageTitle from '@/components/PageTitle'
import buttonStyles from '../styles/FlowButton.module.css'
import ReviewForm from '@/components/ReviewForm'

const reviews = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <PageTitle title='reviews' />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={onOpen} className={buttonStyles.button}> Submit a Review!</button>
        <ReviewForm isOpen={isOpen} onClose={onClose} />
      </div>
    </>
  )
}

export default reviews