import React, { useState, createContext, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
export const CartContext = createContext(null)

const ShoppingCartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const toast = useToast()


  const addItem = (product, quantity) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const currentQuantity = cart[existingProductIndex].cantidad;
      const productStock = product.stock;
      const maxQuantityToAdd = Math.min(productStock - currentQuantity, quantity);

      if (maxQuantityToAdd > 0) {
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].cantidad += maxQuantityToAdd;
        setCart(updatedCart);
        toast({
          position: 'top-right',
          title: `Agregado/s ${quantity} producto/s.`,
          status: 'success',
          isClosable: true,
        });
      } else {
        toast({
          position: 'top-right',
          title: "No hay stock suficiente",
          status: "error",
          isClosable: true,
        });
      }
    } else {
      const updatedProduct = {
        id: product.id,
        nombre: product.nombre,
        precio: product.precio,
        stock: product.stock,
        cantidad: Math.min(product.stock, quantity),
      };
      const updatedCart = [...cart, updatedProduct];
      setCart(updatedCart);
      toast({
        position: 'top-right',
        title: `Agregado/s ${quantity} producto/s.`,
        status: 'success',
        isClosable: true,
      });
    }
  };
  
  const removeItem = (itemId, quantityToRemove = 0) => {
    const itemToRemove = cart.find((item) => item.id === itemId);
  
    if (!itemToRemove) {
      toast({
        position: 'top-right',
        title: `El producto no se encuentra en el carrito`,
        status: 'warning',
        isClosable: true,
      });
      return;
    }
  
    if (quantityToRemove <= 0 || itemToRemove.cantidad <= quantityToRemove) {
      const updatedCart = cart.filter((item) => item.id !== itemId);
      setCart(updatedCart);
    } else {
      const updatedCart = cart.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            cantidad: item.cantidad - quantityToRemove,
          };
        }
        return item;
      });
      setCart(updatedCart);
    }
  
    toast({
      position: 'top-right',
      title: `Producto eliminado`,
      status: 'error',
      isClosable: true,
    });
  };
  

  const clear = () => {
    setCart([])
  };

  useEffect(() => {
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider

