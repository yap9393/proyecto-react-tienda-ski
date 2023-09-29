import React from 'react'
import { useState, useContext } from 'react'
import { useToast } from '@chakra-ui/react'
import { CartContext } from '../../context/ShoppingCartContext'


const ItemCount = ({ stock, producto }) => {

    const [quantity, setQuantity] = useState(1)
    const toast = useToast()
    const { addItem, removeItem } = useContext(CartContext)

    const increment = () => {
        if (quantity == stock) {
            toast({
                position: 'top-left',
                title: "No hay stock suficiente",
                status: "error",
                isClosable: true,
            });

        }
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)

        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={decrement}> - </button>
                <h4 className='Number'>{quantity} </h4>
                <button className='Button' onClick={increment} > + </button>
            </div>
            <div>

                <button className='remove-button' onClick={() => removeItem(producto.id)}> Eliminar todo </button>
                <button className='buy-now-button' onClick={() => addItem(producto, quantity)}  > Agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCount