import React from 'react';
import { useContext } from 'react';
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/ShoppingCartContext'

const Item = ({ producto }) => {
  const { addItem } = useContext(CartContext);

  return (
    <Card className='card' maxW='xs' mt={4}>
      <CardBody>
        <Image src={producto.imageURL} alt={producto.nombre} borderRadius='lg' />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{producto.nombre}</Heading>
          <Text>{producto.categoria}</Text>
          <Text color='blue.600' fontSize='2xl'>${producto.precio}</Text>
          {producto.stock === 0 && <Text color='red'>Sin stock</Text>}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter align="center">
        <ButtonGroup spacing='2'>
          <Link to={`/item/${producto.id}`}>
            <Button variant='solid' colorScheme='yellow'>Descripción</Button>
          </Link>
          {producto.stock > 0 ? (
            <Button colorScheme='blue' onClick={() => addItem(producto, 1)}>Agregar al carrito <FaCartShopping /></Button>
          ) : (
            <Button isDisabled>Sin stock</Button>
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;