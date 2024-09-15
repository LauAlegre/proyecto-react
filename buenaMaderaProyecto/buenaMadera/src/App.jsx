// App.js
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/navBar';
import ItemListContainer from './componentes/ItemListConteniner/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Footer from './componentes/Footer/Footer';
import "./App.css"


const App = () => {
  return (
    <div className="wrapper" >
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
      </div>
  );
}

export default App;

