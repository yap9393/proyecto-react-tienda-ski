import React from 'react';
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
  SimpleGrid,
  
} from '@chakra-ui/react';
import { FaCartShopping } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const Item = ({ producto }) => {
  return (
 
    <Card className='card' maxW='sm'  mt={4}>
      <CardBody>
        <Image src={producto.imageURL} alt={producto.nombre} borderRadius='lg' />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{producto.nombre}</Heading>
          <Text >{producto.categoria} </Text>
          <Text color='blue.600' fontSize='2xl'> ${producto.precio} </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter align="center">
        <ButtonGroup spacing='2' >
        <Link to={`/item/${producto.id}`}>
          <Button variant='solid' colorScheme='blue'>  Descripción </Button>
        </Link>
          <Button variant='ghost' colorScheme='blue'>  Agregar al carrito <FaCartShopping />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  
  );
};

export default Item;
