import React, { useContext } from 'react';
import { CartContext } from '../../context/ShoppingCartContext';
import '../../style.css';
import {Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import Form from './Form';


const Cart = () => {
  const { cart, removeItem, removeOneItem } = useContext(CartContext);
  const totalCarrito = () => {
    let total = 0;

    for (const item of cart) {
      total += item.precio * item.cantidad;
    }
    return total;
  };

  return (




    <div className="cart-container ">
      <h2 className="cart-title">Carrito</h2>
      {cart.length === 0 ? (
        <>
          <p className="empty-cart">Tu carrito está vacío.</p>
          <Link to={'/'}>
            <Button variant='solid' colorScheme='yellow'>  Continuar comprando </Button>
          </Link>
        </>

      ) : (
        <ul className="cart-list">
      
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <span className="item-name">{item.nombre}</span>
              <span className="item-quantity">Cantidad: {item.cantidad}</span>
              <span className="item-price">Precio: ${item.precio}</span>
              <span ><button className='remove-button-cart' onClick={() => removeOneItem(item.id)}> Eliminar 1</button></span>
              <span ><button className='remove-button-cart' onClick={() => removeItem(item.id)}> Eliminar Todo </button></span>
            </li>
          ))}
          <li className="cart-total">
            <span>Total:</span>
            <span className="total-amount">${totalCarrito()}</span>
          </li>
          <li>
            <Form/>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Cart;
