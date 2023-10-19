import React from 'react'
import { useState } from 'react'
const ItemCount = () => {
    // useState para actualizar el valor del contador, validando el stock disponible y que no sea menor a 1 al restar
    const [quantity, setQuantity] = useState(0)
    const increment = () => quantity < 15 && setQuantity(quantity+1)
    const decrement = () => quantity > 1 && setQuantity(quantity-1)
    
    return (
        <>
            <div className="Counter">
                <div className="Controls">
                    <button className="Button" onClick={decrement}>-</button>
                    <h4 className="Number">{quantity}</h4>
                    <button className="Button" onClick={increment}>+</button> 
                </div>
                <div>
                    <button className="button">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </>
    )
}

export default ItemCount
