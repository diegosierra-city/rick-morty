import Cards from "../Cards/Cards"
import Card from "../Card/Card"
import { connect } from "react-redux"
import {filterCards, orderCards} from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

function Favorities({onClose}){
const favoritos = useSelector(state=>state.myFavorites) /// traemos los favoritos del store

const [aux,setAux] = useState(false) /// el cambio de este estado fuerza a React a actualizar el DOM

const dispatch = useDispatch()

   function handleOrder(event){
   dispatch(orderCards(event.target.value))
   setAux(!aux)
   }

   function handleFilter(event){
      dispatch(filterCards(event.target.value))
   }

   //console.log('todos:',allCharacters)

return <div>
<div>
 <select onChange={handleOrder} placeholder="Ordenar">
   <option value="">Ordena</option>
   <option value="A">Ascendente</option>
   <option value="D">Descendente</option>
 </select> 
 
  <select onChange={handleFilter} placeholder="Genero">
   <option value="">Filtra</option>
   <option value="">Todos</option>
   <option value="Male">Hombres</option>
   <option value="Female">Mujeres</option>
   <option value="Genderless">Sin Genero</option>
   <option value="unknown">Desconocido</option>
 </select> 
</div>
 
 <Cards characters={favoritos} onClose={onClose}/>

</div>
}

const mapsStateToProps = (state)=>{
 return {
    myFavorites: state.myFavorites
 }
 }

 export default connect(mapsStateToProps,null)(Favorities)