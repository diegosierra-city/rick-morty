import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from './Detail.module.css'
import { useNavigate } from "react-router-dom"

export default function Detail() {
   let id = useParams()
   //console.log('id',id)
   const navigate = useNavigate();

   function handleBack() {
     navigate(-1); // Navega a la ruta anterior
     }

   const [character, setCharacter] = useState({})

   useEffect(() => {
      // console.log('qq',id.id)

      axios(`https://rickandmortyapi.com/api/character/${id.id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
            //console.log('personaje', data)
         } else {
            alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});

   }, [id]);
   
   
   return <div className={styles.detail}>
      {character.name? 
      ( <><div>
            <h2 className="titulo">{character.name}</h2>
            <p>
               Status: {character.status}<br />
               Gender: {character.gender}<br />
               Specie: {character.species}<br />
               Origin: {() => character.origin.name ? character.origin.name : ''}<br />
{/* {character.origin?.name} */}
            </p>
            <button onClick={handleBack}>Regresar</button>
         </div><div>
               <img src={character.image} alt={character.name} />
            </div></>
      ) : (
       <div>Cargando...</div> 
      )}
   </div>
}