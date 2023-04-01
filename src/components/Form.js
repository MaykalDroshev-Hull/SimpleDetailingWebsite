//More of this video: https://www.youtube.com/watch?v=t2LvPXHLrek&t=1s
import { useState } from 'react'
import { FormControl, FormLabel, Input, Button, FormErrorMessage, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import buttonStyles from '../styles/FlowButton.module.css'
import { sendContactForm } from '@/lib/api'

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
    setFormState(prev => ({
      ...prev,
      isLoading: true,
    }))
    await sendContactForm(values)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Submit Request</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <FormControl isInvalid={touched.firstName && !values.firstName} mb={5}>
              <FormLabel>First Name</FormLabel>
              <Input
                type='text'
                name='firstName'
                value={values.firstName}
                onChange={handleInputChange}
                errorBorderColor='red.300'
                onBlur={onBlur}
                width='300px' />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={touched.lastName && !values.lastName} mb={5}>
              <FormLabel>Last Name</FormLabel>
              <Input
                type='text'
                name='lastName'
                value={values.lastName}
                onChange={handleInputChange}
                errorBorderColor='red.300'
                onBlur={onBlur}
                width='300px' />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={touched.email && !values.email} mb={5}>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                name='email'
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
                name='phoneNumber'
                value={values.phoneNumber}
                onChange={handleInputChange}
                width='300px' />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel>Car Make</FormLabel>
              <Input
                type='text'
                name='carMake'
                value={values.carMake}
                onChange={handleInputChange}
                width='300px' />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel>Car Model</FormLabel>
              <Input
                type='text'
                name='carModel'
                value={values.carModel}
                onChange={handleInputChange}
                width='300px' />
            </FormControl>
            <FormControl mb={5}>
              <FormLabel>Desired Date</FormLabel>
              <Input
                type='date'
                name='desiredDate'
                value={values.desiredDate}
                onChange={handleInputChange}
                width='300px' />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            className={buttonStyles.button}
            disabled={!values.firstName || !values.lastName || !values.email}
            isLoading={isLoading}
            onClick={() => {
              onClose()
              onSubmit()
            }}
          >Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Form