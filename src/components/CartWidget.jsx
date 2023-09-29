import { Button, Box, Flex, } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from '../../context/ShoppingCartContext';

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((total, item) => total + item.cantidad, 0);

    return (
        <div>
            <Flex>
                <Box p='1'><Button><FaCartShopping /><Box p='1'><p>{totalItems}</p></Box></Button></Box>
            </Flex>

        </div>
    )
}

export default CartWidget