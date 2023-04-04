import { useState } from "react"
import { 
  Text,
  Textarea,
  Input, 
  Button,
  Flex, 
  FormLabel,
  FormControl, 
  FormErrorMessage, 
  Modal, 
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody, 
  ModalFooter, 
  useToast 
} from "@chakra-ui/react"
import { sendReviewForm } from "@/lib/api.js"
import buttonStyles from '../styles/FlowButton.module.css'


const initValues = {
  firstName: '',
  lastName: '',
  reviewText: '',
}

const initState = { values: initValues }

const ReviewForm = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState(initState)
  const [touched, setTouched] = useState({})
  const toast = useToast()
  const { values, isLoading, error } = formState

  const onBlur = ({ target }) => setTouched(prev => ({
    ...prev,
    [target.name]: true,
  }))

  const handleInputChange = ({ target }) =>
    setFormState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    console.log(values)
    setFormState(prev => ({
      ...prev,
      isLoading: true,
    }))
    try {
      await sendReviewForm(values)
      setTouched({})
      setFormState(initState)
      onClose()
      toast({
        title: 'Thank you for your review!',
        status: 'success',
        duration: 2000,
        position: 'top'
      })
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        isLoading: false,
        error: error.message
      }))
    }
  }


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Submit Review</ModalHeader>
        <ModalCloseButton />
        {error &&
        <Flex justifyContent='center'>
          <Text color='red.300' my={4} fontSize='x1'>
            {error}
          </Text>
        </Flex>}
        <ModalBody>
          <Flex gap={3}>
            <FormControl isInvalid={touched.firstName && !values.firstName}>
              <Flex flexDirection='column' alignItems='center'>
                <FormLabel>First Name</FormLabel>
                <Input
                  type='text'
                  name='firstName'
                  value={values.firstName}
                  onChange={handleInputChange}
                  errorBorderColor='red.300'
                  onBlur={onBlur}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </Flex>
            </FormControl>
            <FormControl isInvalid={touched.lastName && !values.lastName}>
              <Flex flexDirection='column' alignItems='center'>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  name='lastName'
                  value={values.lastName}
                  onChange={handleInputChange}
                  errorBorderColor='red.300'
                  onBlur={onBlur}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </Flex>
            </FormControl>
          </Flex>
          <Flex flexDirection='column' alignItems='center'>
            <Textarea
              name='reviewText'
              value={values.reviewText}
              onChange={handleInputChange}
              placeholder="Please enter your review here"
              isInvalid={touched.reviewText && !values.reviewText}
              errorBorderColor='red.300'
              onBlur={onBlur}
              mt={3}>
            </Textarea>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button
            className={buttonStyles.button}
            isLoading={isLoading}
            onClick={onSubmit}
          >Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ReviewForm