import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import styles from '../styles/Form.module.css'
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

const Form = (props) => {
  const [formState, setFormState] = useState(initState)
  const [touched, setTouched] = useState({})

  const { values, isLoading } = formState

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
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={props.onClick}>&times;</span>
        <h1>Submit Request</h1>
        <form className={styles.form}>
          <FormControl isRequired isInvalid={touched.firstName && !values.firstName} mb={5}>
            <FormLabel>First Name</FormLabel>
            <Input
              type='text'
              value={values.firstName}
              onChange={handleInputChange}
              errorBorderColor='red.300'
              onBlur={onBlur}
              width='300px' />
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
          <Button mb={5}
            className={buttonStyles.button}
            disabled={!values.firstName || !values.lastName || !values.email}
            onClick={onSubmit}
            type='submit'>Submit
          </Button>
        </form>
      </div >
    </div >
  )
}

export default Form