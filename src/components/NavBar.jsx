import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer
} from '@chakra-ui/react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <div>
      <Flex>
        <Box p='4'>
          <h3> Tienda de Ski y Snowboard</h3>
        </Box>
        <Spacer />
        <Box p='4'>
          <Menu>
            <MenuButton>
              Categorias
            </MenuButton>
            <MenuList>
              <MenuItem>Ski</MenuItem>
              <MenuItem>Snowboard</MenuItem>
              <MenuItem>Accesorios</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p='4'>
          <CartWidget></CartWidget>
        </Box>

      </Flex >
    </div>
  )
}

export default Navbar