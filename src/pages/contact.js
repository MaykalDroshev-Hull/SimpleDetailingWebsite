import { useState } from "react"
import Meta from "@/components/Page Components/Meta"
import PageTitle from "@/components/Page Components/PageTitle"
import { Text, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Select, Stack, Textarea, useToast } from "@chakra-ui/react"
import { sendLongContactForm } from "@/lib/api"
import styles from '../styles/Page Styles/Contact.module.css'
import buttonStyles from '../styles/Component Styles/FlowButton.module.css'

const initValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  carMake: '',
  carModel: '',
  typeOfDetail: '',
  additionalDetails: '',
  desiredDate: '',
}

const initState = { values: initValues }

const contact = () => {
  const [formState, setFormState] = useState(initState)
  const [touched, setTouched] = useState({})
  const { values, isLoading, error } = formState
  const toast =  useToast()
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
    try {
      await sendLongContactForm(values)
      setTouched({})
      setFormState(initState)
      toast({
        title: 'Submission Succesful',
        status: 'success',
        duration: 2000,
        position: 'top'
      })
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }))
    }
  }

  return (
    <>
      <Meta
        title='Contact'
        description="Get in touch with Gentry's Auto Detailing and take the first step towards a cleaner, more polished car. Our experienced team is here to answer your questions and help you schedule an appointment for interior and exterior detailing, paint correction, ceramic coating, and more. Contact us today and experience the highest level of customer service and quality workmanship."
        keywords="auto detailing, car detailing, detailing services, paint correction, ceramic coating, interior detailing, exterior detailing, car care, auto appearance, auto restoration, contact us, schedule an appointment, get in touch, phone number, email address, location"
      />
      <PageTitle title='contact' />
      <div className={styles.content}>
        <div className={styles.contactDetails}>
          <p>You can contact me through email, phone, <br />or submit an appointment request, and <br />I'll get back to you as soon as possible!</p>
          <ul>
            <li>Phone: (804)-998-3470</li>
            <li>Email: lilygentry8914@gmail.com</li>
            <li>Location: Available Upon Request</li>
          </ul>
        </div>
        <div className={styles.formContainer}>
          {error && (
            <Flex justifyContent='center'>
              <Text color='red.300' my={4} fontSize='xl'>
                {error}
              </Text>
            </Flex>
          )}
          <div className={styles.flexDisplay}>
            <Stack direction='row'>
              <FormControl isRequired isInvalid={touched.firstName && !values.firstName} mb={5}>
                <Flex flexDirection='column' alignItems='center'>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type='text'
                    name='firstName'
                    value={values.firstName}
                    onChange={handleInputChange}
                    errorBorderColor="red.300"
                    onBlur={onBlur}
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </Flex>
              </FormControl>
              <FormControl isRequired isInvalid={touched.lastName && !values.lastName} mb={5}>
                <Flex flexDirection='column' alignItems='center'>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type='text'
                    name='lastName'
                    value={values.lastName}
                    onChange={handleInputChange}
                    errorBorderColor="red.300"
                    onBlur={onBlur}
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </Flex>
              </FormControl>
            </Stack>
          </div>
          <div className={styles.flexDisplay}>
            <Stack direction='row'>
              <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
                <Flex flexDirection='column' alignItems='center'>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    errorBorderColor="red.300"
                    onBlur={onBlur}
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </Flex>
              </FormControl>
              <FormControl isRequired isInvalid={touched.phoneNumber && !values.phoneNumber} mb={5}>
                <Flex flexDirection='column' alignItems='center'>
                  <FormLabel> Phone Number</FormLabel>
                  <Input
                    type='tel'
                    name='phoneNumber'
                    value={values.phoneNumber}
                    onChange={handleInputChange}
                    errorBorderColor="red.300"
                    onBlur={onBlur}
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </Flex>
              </FormControl>
            </Stack>
          </div>
          <div className={styles.flexDisplay}>
            <Stack direction='row'>
              <FormControl isRequired isInvalid={touched.carMake && !values.carMake} mb={5}>
                <Flex flexDirection='column' alignItems='center'>
                  <FormLabel>Car Make</FormLabel>
                  <Input
                    type='text'
                    name='carMake'
                    value={values.carMake}
                    onChange={handleInputChange}
                    errorBorderColor="red.300"
                    onBlur={onBlur}
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </Flex>
              </FormControl >
              <FormControl isRequired isInvalid={touched.carModel && !values.carModel} mb={5}>
                <Flex flexDirection='column' alignItems='center'>
                  <FormLabel> Car Model</FormLabel>
                  <Input
                    type='text'
                    name='carModel'
                    value={values.carModel}
                    onChange={handleInputChange}
                    errorBorderColor="red.300"
                    onBlur={onBlur}
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </Flex>
              </FormControl>
            </Stack>
          </div>
          <FormControl isRequired>
            <Flex flexDirection='column' alignItems='center'>
              <FormLabel>Type of Detailing</FormLabel>
              <Select
                placeholder=" "
                name='typeOfDetail'
                value={values.typeOfDetail}
                onChange={handleInputChange}
                onBlur={onBlur}
                maxWidth='450px'
              >
                <option>Interior Detail</option>
                <option>Exterior Detail</option>
                <option>Full Detail</option>
              </Select>
            </Flex>
          </FormControl>
          <FormControl mt={3} mb={5}>
            <Flex flexDirection='column' alignItems='center'>
              <FormLabel>Additional Details (Optional)</FormLabel>
              <Textarea
                type='text'
                name='additionalDetails'
                value={values.additionalDetails}
                onChange={handleInputChange}
                maxWidth='450px'
              />
            </Flex>
          </FormControl>
          <FormControl isRequired mb={5}>
            <Flex flexDirection='column' justifyContent='center' alignItems='center'>
              <FormLabel>Desired Date</FormLabel>
              <Input
                type='date'
                name='desiredDate'
                value={values.desiredDate}
                onChange={handleInputChange}
                maxWidth='450px' />
            </Flex>
          </FormControl>
          <Flex>
            <Button
              className={buttonStyles.button}
              isLoading={isLoading}
              onClick={onSubmit}
            >Submit</Button>
          </Flex>
        </div>
      </div>
    </>
  )
}

export default contact