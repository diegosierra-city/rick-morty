import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from './About.module.css'
export default function Detail() {
   
   const [character, setCharacter] = useState({
    "id": 736,
    "name": "Diego Sierra",
    "status": "Desarrollador Fullstack , autor de esta página.",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "La Plata, Huila - Colombia",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "location": {
        "name": "Space",
        "url": "https://rickandmortyapi.com/api/location/115"
    },
    "image": "./Diego.png",
    "episode": [
        "https://rickandmortyapi.com/api/episode/45"
    ],
    "url": "https://rickandmortyapi.com/api/character/736",
    "created": "2021-10-17T12:11:21.171Z"
})

   return <div className={styles.detail}>
      {character.name? 
      ( <><div>
            <h2 className="titulo">{character.name}</h2>
            <p>
               {character.status}<br /><br />
               Gender: {character.gender}<br />
               Specie: {character.species}<br />
               Origin: {character.origin?.name}<br />

            </p>
            <a href={'https://www.linkedin.com/in/diego-sierra-398627227/'} target="_blank" ><button>LinkedIn</button></a>
         </div><div>
               <img src={character.image} alt={character.name} />
               
            </div></>
      ) : (
       <div>Cargando...</div> 
      )}

    {/* {character.origin?.name} */}  
   </div>
}