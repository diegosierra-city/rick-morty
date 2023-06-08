import './App.css';
import About from './views/About/About';
import Cards from './components/Cards/Cards.jsx';
import Detail from './views/Detail/Detail';
import Nav from './components/Nav/Nav';
import Error from './components/Error/Error';
import logo from './img/logo.png';
import { useState } from 'react';
import { useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Form from './components/Form/Form';
import Favorities from './components/Favorites/Favorities';

function App() {
   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   const [access, setAccess]= useState(false)
   const EMAIL='diegosierra@cityciudad.com'
   const PASSWORD = '123456'

   const login = (userData)=>{
if(userData.email===EMAIL && userData.password===PASSWORD){
   setAccess(true)
   navigate('/home');
}else{
   setAccess(false)
   alert('usuario o password incorrectos')
}
return access  
   }

 const onClose = (idBorrar) => {
  let newCharacters = characters.filter((item) => item.id !== Number(idBorrar));
  setCharacters(newCharacters)
  //alert(idBorrar)
}
   
const location=useLocation()
//console.log(location)
  
 useEffect(() => {///solo da acceso si access esta en true
   !access && navigate('/');
}, [access]);

   return (
      <div className='App'>

         {location.pathname!=='/'? <Nav setCharacters={setCharacters} /> : '' }
         
         <img src={logo} alt='logo' className='logo' />

<Routes>
<Route path="/" element={<Form login={login} />} />   
<Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
<Route path="/about" element={<About />} />
<Route path="/detail/:id" element={<Detail />} />
<Route path="/favorities" element={<Favorities />} />
<Route path="*" element={<Error />} />
</Routes>
      </div>
   );
}

export default App;
