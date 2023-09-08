import {Button, Box, Flex,  } from '@chakra-ui/react';
import React from 'react'
import { FaCartShopping } from "react-icons/fa6";


const CartWidget = () => {
    return (
        <div>
            <Flex>
                <Box p='1'><Button><FaCartShopping /><Box p='1'><p>4</p></Box></Button></Box>
            </Flex>
            
        </div>
    )
}

export default CartWidget