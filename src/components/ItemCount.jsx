import React from 'react'
import { useState } from 'react'
import './ItemCount.scss'
import { Link } from 'react-router-dom'

const ItemCount = () => {
    // useState para actualizar el valor del contador, validando el stock disponible y que no sea menor a 1 al restar
    const [quantity, setQuantity] = useState(1)
    const increment = () => quantity < 15 && setQuantity(quantity + 1)
    const decrement = () => quantity > 1 && setQuantity(quantity - 1)

    return (
        <>
            <div className="counter">
                <div className="counter-controls">
                    <button className="counter-button" onClick={decrement}>-</button>
                    <h4 className="quantity">{quantity}</h4>
                    <button className="counter-button" onClick={increment}>+</button>
                </div>
                <div className='button-group'>
                    <Link className='counter-link'>
                        <button className="button">
                            Agregar al carrito
                        </button>
                    </Link>
                    <Link to={"/"} className='counter-link'>
                        <button className='button'>
                            Volver
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ItemCount
