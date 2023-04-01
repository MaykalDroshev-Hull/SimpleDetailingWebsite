//Maybe try to decrease the size of the form component
import { Flex, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"

const FormRequireEntry = (props) => {
  return (
    <Flex flexDirection='column' justifyContent='center' alignItems='center'>
      <FormLabel>{props.label}</FormLabel>
      <Input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.handleInputChange}
        errorBorderColor='red.300'
        onBlur={props.onBlur}
        width='300px'
      />
      <FormErrorMessage>Required</FormErrorMessage>
    </Flex>
  )
}

export default FormRequireEntry