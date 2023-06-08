
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass = /\d/;

export default function validation(input){
 let errors = {}
//console.log('N',input)

 if(!input.email ){
 errors.email='Se requiere este campo' 
 }else if(!regexEmail.test(input.email)){
  errors.email = 'Debe ser un correo electrónico' 
 }else if(input.email.length>35){
  errors.email='No puede tener más de 35 caracteres'
 }

 //
 if(!input.password ){
  errors.password='Se requiere este campo' 
  }else if(!regexPass.test(input.password)){
  errors.password = 'Debe contener por lo menos un número'
 } else if(input.password.length<6 || input.password.length>10){
  errors.password='Debe tenr entre 6 y 10 caracteres'
 } 
 
 //console.log('ERR',errors)
 return errors
}