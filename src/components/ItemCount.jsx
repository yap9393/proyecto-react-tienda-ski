import React from 'react'
import { useState } from 'react'


const ItemCount = ({ stock, initial, onAdd }) => {
    // console.log('6)el stock es: ' + stock)
    const [quantity, setQuantity] = useState(0)


    const increment = () => {
        if (quantity == stock) {
            alert('No hay stock suficiente')
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
    // const onAdd=()=>{
    //     alert('quantity')
    // }
    //funcion que vamos a usar mas adelante que va a tener un push a un array vacio que es mi carrito

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={decrement}> - </button>
                <h4 className='Number'>{quantity} </h4>
                <button className='Button' onClick={increment} > + </button>
            </div>
            <div>
                <button className='buy-now-button' onClick={() => onAdd(quantity)} disabled={!stock} > Agregar al carrito </button>
            </div>
        </div>




    )
}

export default ItemCount