import { useState } from 'react'
import { Input, Spacer } from '@nextui-org/react'
import styles from '../styles/Form.module.css'
import buttonStyles from '../styles/FlowButton.module.css'

const Form = (props) => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    carMake: '',
    carModel: '',
    desiredDate: '',
  })

  const handleInputChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name

    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(formState)
    props.onClick()
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className="close" onClick={props.onClick}>&times;</span>
        <h1>Submit Request</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Spacer y={1.6} />
          <Input type='text' name='firstName' value={formState.firstName} onChange={handleInputChange} labelPlaceholder='First Name' required clearable width='300px'/>
          <Spacer y={1.6} />
          <Input type='text' name='lastName' value={formState.lastName} onChange={handleInputChange} labelPlaceholder='Last Name' required clearable width='300px'/>
          <Spacer y={1.6} />
          <Input type='email' name='email' value={formState.email} onChange={handleInputChange} labelPlaceholder='Email' required clearable width='300px'/>
          <Spacer y={1.6} />
          <Input type='tel' name='phoneNumber' value={formState.phoneNumber} onChange={handleInputChange} labelPlaceholder='Phone Number' clearable width='300px'/>
          <Spacer y={1.6} />
          <Input type='text' name='carMake' value={formState.carMake} onChange={handleInputChange} labelPlaceholder='Car Make' clearable width='300px'/>
          <Spacer y={1.6} />
          <Input type='text' name='carModel' value={formState.carModel} onChange={handleInputChange} labelPlaceholder='Car Model' clearable width='300px'/>
          <Spacer y={.75} />
          <h4>Desired Date</h4>
          <Input type='date' name='desiredDate' value={formState.desiredDate} onChange={handleInputChange} width='300px'/>
          <Spacer y={1.6} />
          <button className={buttonStyles.button} type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form