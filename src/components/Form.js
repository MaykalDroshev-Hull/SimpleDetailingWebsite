import { useState } from 'react'
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
        <h1>Form</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Label
            <input type='text' name='firstName' value={formState.firstName} onChange={handleInputChange} placeholder='First Name' required />
          </label>
          <label>
            Label
            <input type='text' name='lastName' value={formState.lastName} onChange={handleInputChange} placeholder='Last Name' required />
          </label>
          <label>
            Label
            <input type='email' name='email' value={formState.email} onChange={handleInputChange} placeholder='Email' required />
          </label>
          <label>
            Label
            <input type='tel' name='phoneNumber' value={formState.phoneNumber} onChange={handleInputChange} placeholder='Phone Number' />
          </label>
          <label>
            Label
            <input type='text' name='carMake' value={formState.carMake} onChange={handleInputChange} placeholder='Car Make' />
          </label>
          <label>
            Label
            <input type='text' name='carModel' value={formState.carModel} onChange={handleInputChange} placeholder='Car Model' />
          </label>
          <label>
            Desired Date:
            <input type='date' name='desiredDate' value={formState.desiredDate} onChange={handleInputChange} />
          </label>
          <button className={buttonStyles.button} type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form