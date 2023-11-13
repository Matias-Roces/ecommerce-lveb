import './ItemCart.scss'
import React from 'react'
import { useContext, useState } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const ItemCart = ({ p }) => {
    //props
    const { id, nombre, img, precio, cantidad } = p;
    
    //context 
    const { eliminarItem } = useContext(CartContext)
    //state 
    const [quantity, setQuantity] = useState(cantidad)
    const [subtotal, setSubtotal] = useState(quantity * precio)
    //funciones
    
    
    return (
        <div key={id}className='cart-card'>
            <div className='cart-body'>
                <img
                    src={img}
                    alt={nombre}
                    className='cart-img'
                />
                <div className='cart-texto'>
                    <h3 className='cart-titulo'>{nombre}</h3>
                    <div className="cart-botonera">
                        
                        <p className="cart-cantidad">{quantity}</p>
                        
                    </div>
                </div>
                <div className="precios">
                    <div className="precio-unidad">Precio/unidad: $ {precio}</div>
                    <div className="precio">Precio Total: $ {subtotal}</div>
                </div>
                <div className='cart-eliminar'>
                    <button className='boton-eliminar' onClick={()=>eliminarItem(id, cantidad, precio)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart