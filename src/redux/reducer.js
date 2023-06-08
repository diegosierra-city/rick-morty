import {ADD_FAV,REMOVE_FAV,FILTER,ORDER} from './actions'

const initialState = {
 myFavorites: [],
 allCharacters: [] ///copia del estado para no perderlo
}

export default function rootReducer(state = initialState, action){
switch (action.type) {
 case ADD_FAV:
  return {
    ...state,
   myFavorites: [...state.myFavorites, action.payload],
   allCharacters: [...state.myFavorites, action.payload] ///se agrega para no perder el ultimo ingresado
  }

  /*
  myFavorites: [...state.myFavorites, action.payload],
   allCharacters: [...state.myFavorites]


case ADD_FAV:
  return {
    ...state,
   myFavorites: [...state.myFavorites, action.payload]
  }
  */

  case REMOVE_FAV:
   let newFav= state.myFavorites.filter((item) => item.id !== Number(action.payload));
    return {
    ...state,
   myFavorites: [...newFav]
  }

  case FILTER:
   let newList=[]
  action.payload!==''? newList= state.allCharacters.filter((item) => item.gender === action.payload) : newList= [...state.allCharacters]

  return {
    ...state,
   myFavorites: [...newList]
  }

  case ORDER:
    let newOrder
    if(action.payload==='A'){///ascendente
newOrder= state.myFavorites.sort((objeto1, objeto2) => {
    if (objeto1.name < objeto2.name) {
      return -1;
    }
    if (objeto1.name > objeto2.name) {
      return 1;
    }
    return 0;
  });
    }else if(action.payload==='D'){
      newOrder= state.myFavorites.sort((objeto1, objeto2) => {
          if (objeto1.name > objeto2.name) {
            return -1;
          }
          if (objeto1.name < objeto2.name) {
            return 1;
          }
          return 0;
        });
          }

   return {
    ...state,
   myFavorites: [...newOrder]
  }

 default:
  return {...state}
}
}