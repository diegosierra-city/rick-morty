import './App.css';
import About from './components/About/About';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail';
import Nav from './components/Nav/Nav';
import logo from './img/logo.png';
import { useState } from 'react';
import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'

function App() {
   const [characters, setCharacters] = useState([]);
   
 const onClose = (idBorrar) => {
  let newCharacters = characters.filter((item) => item.id !== Number(idBorrar));
  setCharacters(newCharacters)
  //alert(idBorrar)
}   

   // console.log(Rick)
   return (
      <div className='App'>
         <Nav setCharacters={setCharacters}/>
         <img src={logo} alt='logo' className='logo' />

         

<Routes>
<Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
<Route path="/" element={<Cards characters={characters} onClose={onClose} />} />
<Route path="/about" element={<About />} />
<Route path="/detail" element={<Detail />} />
   <Route path="/detail/:id" element={<Detail />} />
</Routes>
      </div>
   );
}

export default App;
