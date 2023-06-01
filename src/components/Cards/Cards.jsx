import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards({characters,onClose}) {
   //console.log(characters)
   return <div className={style.zona_cards}>
      {characters.map((character)=>(
      <div key={character.id}>
         <Card character={character}  onClose={onClose}/>
         </div>
      ))}
   </div>;
}
