
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPersonCircleQuestion, faCircleXmark, faMagnifyingGlass, faCircleUser, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
import style from './Card.module.css'
import { connect } from 'react-redux';
import {addFav,removeFav} from '../../redux/actions'
import { useState, useEffect } from 'react';


function Card({character,onClose,addFav,removeFav,myFavorites}) {

   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   const handleFavorite = () => {
      if(isFav){
      setIsFav(false)
removeFav(character.id)
      }else{
       setIsFav(true) 
       addFav(character) 
      }  
    };

   //console.log('personaje', character)
   const { name, status, species, gender, origin, image } = character
   
   return (
     
<div className={style.card}>
<div className={style.zona_imagen}>
<img src={image} alt={character.name} />

{/* <span className={style.close} onClick={()=>onClose(character.id)}>
<FontAwesomeIcon icon={faCircleXmark} />
</span> */}

</div>

<div className={style.zona_botones}>

<NavLink to={'/detail/'+character.id}> 
<button className={style.btn_green}>
<FontAwesomeIcon icon={faCircleUser} />
</button> 
</NavLink>

<span>
{
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
{/* <FontAwesomeIcon icon={faHeart} /> */}
</span> 
<button onClick={()=>onClose(character.id)}>
<FontAwesomeIcon icon={faCircleXmark} />
</button> 
</div>

<h2 className='titulo'> {character.name}</h2>

 <div className={style.zona_iconos}>
   <span className={style.font2x}><FontAwesomeIcon icon={faPersonCircleQuestion} /></span>
         <div><small><strong>especie</strong></small><br />{species}</div>
         <div><small><strong>genero</strong></small><br />{gender}</div>
         <div><small><strong>status</strong></small><br />{status}</div>
         </div>

      </div>
      
   );
}

const mapDispatchToProps = (dispatch)=>{
   return {
      addFav: (personaje) => dispatch(addFav(personaje)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapsStateToProps = (state)=>{
return {
   myFavorites: state.myFavorites //puede ser otro nombre
}
}

export default connect(mapsStateToProps,mapDispatchToProps)(Card)