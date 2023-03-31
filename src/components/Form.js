//Check Chakra UI to get a Modal to work properly. And watch more of this video: https://www.youtube.com/watch?v=t2LvPXHLrek&t=1s
import { useState } from 'react'
import { FormControl, FormLabel, Input, Button, FormErrorMessage, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import buttonStyles from '../styles/FlowButton.module.css'

const initValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  carMake: '',
  carModel: '',
  desiredDate: '',
}

const initState = { values: initValues }

const Form = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState(initState)
  const [touched, setTouched] = useState({})

  const { values, isLoading } = formState

  //This function ain't working, but whatever for now
  const onBlur = ({ target }) => setTouched(prev => ({
    ...prev,
    [target.name]: true,
  }))

  const handleInputChange = ({ target }) =>
    setFormState(prev => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))

  const onSubmit = async () => {
    setFormState(prev => ({
      ...prev,
      isLoading: true,
    }))
    console.log(formState)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired isInvalid={touched.firstName && !values.firstName} mb={5}>
            <FormLabel>First Name</FormLabel>
            <Input
              type='text'
              value={values.firstName}
              onChange={handleInputChange}
              errorBorderColor='red.300'
              onBlur={onBlur}
              width='300px' />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={touched.lastName && !values.lastName} mb={5}>
            <FormLabel>Last Name</FormLabel>
            <Input
              type='text'
              value={values.lastName}
              onChange={handleInputChange}
              errorBorderColor='red.300'
              onBlur={onBlur}
              width='300px' />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
            <FormLabel>Email</FormLabel>
            <Input
              type='email'
              value={values.email}
              onChange={handleInputChange}
              errorBorderColor='red.300'
              onBlur={onBlur}
              width='300px' />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl mb={5}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type='tel'
              value={values.phoneNumber}
              onChange={handleInputChange}
              width='300px' />
          </FormControl>
          <FormControl mb={5}>
            <FormLabel>Car Make</FormLabel>
            <Input
              type='text'
              value={values.carMake}
              onChange={handleInputChange}
              width='300px' />
          </FormControl>
          <FormControl mb={5}>
            <FormLabel>Car Model</FormLabel>
            <Input
              type='text'
              value={values.carModel}
              onChange={handleInputChange}
              width='300px' />
          </FormControl>
          <FormControl mb={10}>
            <FormLabel>Desired Date</FormLabel>
            <Input
              type='date'
              value={values.desiredDate}
              onChange={handleInputChange}
              width='300px' />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button mb={5}
            className={buttonStyles.button}
            disabled={!values.firstName || !values.lastName || !values.email}
            isLoading={isLoading}
            onClick={onClose}
          >Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Form