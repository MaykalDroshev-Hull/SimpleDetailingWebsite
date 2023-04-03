import { useState } from "react"
import { Input, Flex, FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalFooter, Button, FormErrorMessage, Textarea } from "@chakra-ui/react"
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

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Submit Review</ModalHeader>
        <ModalCloseButton />
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
            onClick={null}
          >Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ReviewForm