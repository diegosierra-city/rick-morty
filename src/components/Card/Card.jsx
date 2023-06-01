import style from './Card.module.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPersonCircleQuestion, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function Card({character,onClose}) {

   const handleClick = () => {
      //props.onClose("Hola desde el hijo");
    };

   console.log('personaje', character)
   const { name, status, species, gender, origin, image } = character
   
   return (

      
      <div className={style.card}>
<div className={style.zona_imagen}>
<img src={image} alt={character.name} />

<span className={style.close} onClick={()=>onClose(character.id)}>
<FontAwesomeIcon icon={faCircleXmark} />
</span>
</div>
        <Link to={'/detail/'+character.id}> <h2> {character.name}</h2></Link>

         <div className={style.zona_iconos}>
         <div> <FontAwesomeIcon icon={faPersonCircleQuestion} /> {species}</div>
         <div>{gender}</div>
         <div>{status}</div>
         </div>
        
      </div>
      
   );
}

/// revisar funcion boton

/* name: nombre.
status: status.
species: especie.
gender: género.
origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
image: imagen. */