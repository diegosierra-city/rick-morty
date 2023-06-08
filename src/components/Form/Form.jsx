import styles from './Form.module.css'
import validation from '../../utils/validation'
import { useState } from 'react'


export default function Form({login}){

 const [userData, setUserData] = useState({
  email: '',
  password: ''
 })

 const [errors, setErrors] = useState({})

 function handleChange(evento){
  setUserData({
   ...userData,
   [evento.target.name]: evento.target.value
  })
 setErrors(
  validation({
   ...userData,
   [evento.target.name]: evento.target.value
  })
 )
  
 }
 

 const handleSubmit = (evento) => {
  evento.preventDefault()
login(userData)

 }

 return <div className={styles.form}>
  <form onSubmit={handleSubmit}>
   <label htmlFor="email">Email:</label><br />
   <input type="text" name="email" value={userData.email} onChange={handleChange}  />
   {errors.email && <div className={styles.danger}>{errors.email}</div>}
   <br />
   <label htmlFor="password">Clave:</label><br />
   <input type="password" name="password" value={userData.password} onChange={handleChange}   />
   {errors.password && <div className={styles.danger}>{errors.password}</div>}
   <br />
   <button type="submit">Submit</button>
  </form>
 </div>
}