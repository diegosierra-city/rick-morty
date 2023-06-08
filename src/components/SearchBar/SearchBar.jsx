import styles from './SearchBar.module.css'


export default function SearchBar({ onSearch, handleChange }) {
   //console.log('tx',typeof handleChange)
   
   ///al input asignarle a este el estado local como su value ???
   return (
      <div>
         <input type='search' placeholder='id' className={styles.search_input} onChange={handleChange} id="znBuscador" />
         <button onClick={()=>onSearch()}>Agregar</button>
      </div>
   );
}
/*
si cargo onSearch() React entiende que la estoy invocando y la ejecuta apenas carga el modulo
*/