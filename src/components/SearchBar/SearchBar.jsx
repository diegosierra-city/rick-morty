import styles from './SearchBar.module.css'
import { useState } from 'react';
import axios from 'axios';

export default function SearchBar({ setCharacters }) {
   //console.log('tx',typeof handleChange)
   const [id, setId] = useState('')
   //buscar
   
   function handleChange(event) {
      event.preventDefault() ///impide envios involuntarios
      let valor = event.target.value
     setId(valor)
      //console.log('Y', id)
   }

   function onSearch() {
      console.log('Yx', id)
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }


   ///al input asignarle a este el estado local como su value ???
   return (
      <div>
         <input type='search' placeholder='id' className={styles.search_input} onChange={handleChange} />
         <button className={styles.search_button} onClick={()=>onSearch()}>Agregar</button>
      </div>
   );
}
/*
si cargo onSearch() React entiende que la estoy invocando y la ejecuta apenas carga el modulo
*/