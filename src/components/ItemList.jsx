import React from 'react';
import { Flex } from '@chakra-ui/react';
import Item from '../components/Item';

const ItemList = ({ productos, selectedCategory }) => {

  const filteredProductos =
  selectedCategory === "Todos"
  ? productos
  : productos.filter((producto) => producto.categoria=== selectedCategory.toLowerCase());
  console.log('4) CATEGORIA :' +selectedCategory)

  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {filteredProductos.map((p) => (
        <Item key={p.id} producto={p} />
      ))}
    </Flex>
  );
};


export default ItemList;