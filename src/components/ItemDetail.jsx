import React from 'react';
import { Flex } from '@chakra-ui/react';
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
} from '@chakra-ui/react';
import ItemCount from '../components/ItemCount';

const ItemDetail = ({ product }) => {
  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <Flex flexWrap="wrap" justifyContent="center">
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        h='500px'
        w='800px'
        mt={4}
      >
        <Image
          objectFit='cover'
          maxW={{ base: '80%' }}
          maxH={{ base: '80%' }}
          src={product.imageURL}
          alt={product.nombre}
        />
        <Stack>
          <CardBody>
            <Heading size='lg'>{product.nombre}</Heading>
            <Text py='2'>{product.descripcion}</Text>
            <Text color='blue.600' fontSize='30'>
              ${product.precio}
            </Text>
            {product.stock === 0 ? (
              <Text color='red' fontSize={'xx-large'}>Sin stock</Text>
            ) : (
              <ItemCount producto={product} stock={product.stock} />
            )}
          </CardBody>
          <CardFooter></CardFooter>
        </Stack>
      </Card>
    </Flex>
  );
};

export default ItemDetail;
