import React from 'react'
import { Flex, } from '@chakra-ui/react';
import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    CardFooter,
} from '@chakra-ui/react';
import ItemCount from '../components/ItemCount'

const ItemDetail = ({ productos, itemId }) => {
    console.log(productos)
    const producto = productos.find((p) => p.id.toString() === itemId);
    if (!producto) {
        return <p>Producto no encontrado</p>;
    }
    console.log(producto)
    return (
        <Flex flexWrap="wrap" justifyContent="center">
            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' h='500px' w='800px' mt={4} >
                <Image  objectFit='cover' maxW={{ base: '80%' }} src={producto.imageURL} alt={producto.nombre} />
                <Stack>
                    <CardBody>
                        <Heading size='lg'>{producto.nombre}</Heading>
                        <Text py='2'>{producto.descripcion}</Text>
                        <Text color='blue.600' fontSize='30'> ${producto.precio} </Text>
                        <ItemCount stock={producto.stock}/>
                    </CardBody>
                    <CardFooter>
                    </CardFooter>
                </Stack>
            </Card>
        </Flex>
    )
}

export default ItemDetail