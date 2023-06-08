import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css'
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function Nav({ setCharacters }) {
   const [id, setId] = useState('')

   function randomCharacter() {
      let randomC = Math.floor(Math.random() * 826) + 1;
      setId(randomC)
      onSearch(randomC)
      //console.log('u' + randomC, id)

   }
   const location = useLocation()
   function isActive(ruta) {
      //console.log('x',ruta+'!='+location.pathname)
      return ruta == location.pathname ? true : false
   }

   function onSearch(random) {
      let idSearch = 0
      random && random != undefined ? idSearch = random : idSearch = id
      //console.log('Yx', idSearch + ':' + id + ':' + random)
      if (idSearch != '') {
         axios(`https://rickandmortyapi.com/api/character/${idSearch}`).then(({ data }) => {
            //console.log('data', data)
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
               document.querySelector('#znBuscador').value=''
               setId('')///se formatea para evitar que se agrege de nuevo
            } else {
               alert('¡No hay personajes con este ID!');
            }
         });
      }
   }



   //buscar

   function handleChange(event) {
      event.preventDefault() ///impide envios involuntarios
      let valor = event.target.value
      setId(valor)
//console.log('Y', id)
   }

   //console.log('zz',typeof onSearch)
   return <div className={styles.nav}>
      <NavLink to={'/home'} className={isActive('/home') ? styles.active : styles.disable}><button className={styles.boton_menu} >Home</button></NavLink>
      <NavLink to={'/favorities'} className={isActive('/home') ? styles.active : styles.disable}><button className={styles.boton_menu} >Favoritos</button></NavLink>
      <NavLink to={'/about'} className={isActive('/about') ? styles.active : styles.disable}><button className={styles.boton_menu}>About</button></NavLink>
      | <SearchBar onSearch={onSearch} handleChange={handleChange} />
      <NavLink>
         <button className={styles.boton_menu} onClick={randomCharacter}>Personaje ?</button>
      </NavLink>
   </div>
}
