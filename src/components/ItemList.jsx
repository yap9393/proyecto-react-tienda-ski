import React, { useContext } from 'react';
import { Flex } from '@chakra-ui/react';
import Item from '../components/Item';
import Loader from './Loader';
import { CategoryContext } from '../../context/CategoryContext'; 


const ItemList = ({ productos }) => {
  const { selectedCategory } = useContext(CategoryContext); 

  const filteredProductos =
    selectedCategory === "Todos" ? productos
      : productos.filter((producto) => producto.categoria === selectedCategory.toLowerCase());
  
  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {filteredProductos.length > 0 ? (
        filteredProductos.map((p) => (
          <Item key={p.id} producto={p} />
        ))
      ) : (
        <Loader></Loader>
      )}
    </Flex>
  );
}


export default ItemList;