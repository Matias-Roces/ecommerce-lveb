import React from 'react'
import ItemCart from './ItemCart'
import "./ItemCartMap.scss"
import { useContext, useState } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Link } from 'react-router-dom'
import CartForm from './CartForm'

const ItemCartMap = ({ carrito }) => {

  const { vaciarCarrito, total } = useContext(CartContext)

  // const [mostrarForm, setMostrarForm] = useState(false)

  if (total === 0) {
    // setMostrarForm(false)
    return (
      <div className="empty-cart">
        <img src="./empty-cart.jpg" alt="El carrito está vacío" />
        <Link to={"/"} className='volver'>Continuar comprando</Link>
      </div>
    )
  } else {
    return (
      <div className="carrito">
        <h1>Resumen de la compra</h1>
        <div className="">
          {
            carrito.map((p) => {
              return (
                <ItemCart key={p.id} p={p} />
              )
            })
          }
        </div>
        <div className="precio-container">
          <h2>Total: $ {total}</h2>
        </div>
        <div className="botonera-carrito">

          <button className="vaciar-carrito" onClick={vaciarCarrito}>Vaciar carrito de compras</button>
        </div>
        <CartForm />
      </div>
    )
  }

}

export default ItemCartMap