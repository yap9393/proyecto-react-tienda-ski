import { Box, Flex, Spacer } from '@chakra-ui/react';
import React from 'react'
import { FaCartShopping } from "react-icons/fa6";


const CartWidget = () => {
    return (
        <div>
            <Flex>
                <Box p='1'>
                    <FaCartShopping />
                </Box>
                <Box p='1'>
                    <p>4</p>
                </Box>
            </Flex>
            
        </div>
    )
}

export default CartWidget