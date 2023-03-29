import {useState} from 'react'
import styles from '../styles/Form.module.css'

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

    setFormState({...formState, [name]: value})
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
        <form onSubmit={handleSubmit}>
          <label>
            First Name: 
            <input type='text' name='firstName' value={formState.firstName} onChange={handleInputChange}/>
          </label>
          <label>
            Last Name:
            <input type='text' name='lastName' value={formState.lastName} onChange={handleInputChange}/>
          </label>
          <label>
            Email:
            <input type='email' name='email' value={formState.email} onChange={handleInputChange}/>
          </label>
          <label>
            Phone Number:
            <input type='tel' name='phoneNumber' value={formState.phoneNumber} onChange={handleInputChange}/>
          </label>
          <label>
            Car Make:
            <input type='text' name='carMake' value={formState.carMake} onChange={handleInputChange}/>
          </label>
          <label>
            Car Model:
            <input type='text' name='carModel' value={formState.carModel} onChange={handleInputChange}/>
          </label>
          <label>
            Desired Date:
            <input type='date' name='desiredDate' value={formState.desiredDate} onChange={handleInputChange}/>
          </label>
          <button type='submit'>Request Appointment</button>
        </form>
      </div>
    </div>
  )
}

export default Form