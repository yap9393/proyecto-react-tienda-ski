import React, { useContext } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer
} from '@chakra-ui/react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { CategoryContext } from '../../context/CategoryContext';

const Navbar = () => {
  const { handleCategoryClick } = useContext(CategoryContext);

  return (
    <div className='navbar fondoAmarillo'>
      <Flex>
        <Box p='4'>
          <Link to={'/'}>
            <h3> Vista Bahn Ski Shop</h3>
          </Link>
        </Box>
        <Spacer />
        <Box p='4'>
          <Menu>
            <MenuButton>
              Categorías
            </MenuButton>
            <MenuList>
              <Link to={`/category/all`}>
                <MenuItem onClick={() => handleCategoryClick("Todos")}>
                  <span>Todo</span>
                </MenuItem>
              </Link>
              <Link to={`/category/ski`}>
                <MenuItem onClick={() => handleCategoryClick("ski")}>
                  <span>Ski</span>
                </MenuItem>
              </Link>
              <Link to={`/category/snowboard`}>
                <MenuItem onClick={() => handleCategoryClick("snowboard")}>
                  <span>Snowboard</span>
                </MenuItem>
              </Link>
              <Link to={`/category/botas-ski`}>
                <MenuItem onClick={() => handleCategoryClick("Botas de Ski")}>
                  <span>Botas de Ski</span>
                </MenuItem>
              </Link>
              <Link to={`/category/botas-snowboard`}>
                <MenuItem onClick={() => handleCategoryClick("Botas de Snowboard")}>
                  <span>Botas de Snowboard</span>
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p='4'>
          <Link to={'/cart'}>
            <CartWidget></CartWidget>
          </Link>
        </Box>
      </Flex >
    </div>
  )
}

export default Navbar