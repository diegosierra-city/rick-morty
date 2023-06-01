import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css'
import { Link, useLocation } from "react-router-dom";

export default function Nav({setCharacters}){

 function randomCharacter(){
  let randomC= Math.floor(Math.random() * 826) + 1;
 
 }
 const location=useLocation()
 function isActive(ruta){
  //console.log('x',ruta+'!='+location.pathname)
  return  ruta == location.pathname ? true : false
  }

 //console.log('zz',typeof onSearch)
 return <div className={styles.nav}>
  <Link to={'/home'}><button className={isActive('/home') ? styles.active : styles.disable}>Home</button></Link>
  <Link to={'/about'}><button className={isActive('/about') ? styles.active : styles.disable}>About</button></Link>
  | <SearchBar setCharacters={setCharacters}/>
  <button className={styles.disable}>Personaje ?</button>
 </div>
}
