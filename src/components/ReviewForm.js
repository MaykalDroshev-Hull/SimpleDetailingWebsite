import { useState } from "react"
import { Input, FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalFooter, Button } from "@chakra-ui/react"
import buttonStyles from '../styles/FlowButton.module.css'

const initValues = {
  someText: '',
}

const initState = { values: initValues }

const ReviewForm = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState(initState)
  const [touched, setTouched] = useState({})
  const {values, isLoading, error} = formState

  const handleInputChange = ({ target }) =>
    setFormState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  
  const onSubmit = () =>{
    console.table(values)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Submit Review</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Some Text</FormLabel>
            <Input
              type='text'
              name='someText'
              value={values.someText}
              onChange={handleInputChange}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            className={buttonStyles.button}
            onClick={onSubmit}
            >Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ReviewForm