import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ShoppingCartContext from '../context/ShoppingCartContext';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import CategoryProvider from '../context/CategoryContext';
import Footer from './components/Footer';

const App = () => {
  return (
    <CategoryProvider>
      <ShoppingCartContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
          <Footer/> 
        </BrowserRouter>
      </ShoppingCartContext>
    </CategoryProvider>
    
  );
};

export default App;

