import React, { useState, useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import './CartForm.scss'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import Swal from 'sweetalert2'

const CartForm = () => {
    //useState
    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [orderId, setOrderId] = useState(null)
    //useContext
    const { setBadge, setTotal, vaciarCarrito } = useContext(CartContext)
    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (nombre === "" || mail === "") {
            Swal.fire(
                {
                    title: `Ups...`,
                    text: `Por favor, complete su nombre y su mail para realizar su compra`,
                    icon: `warning`
                }
            )
        } else {
            addDoc(ordersCollection, order)
                .then(({ id }) => {
                    setOrderId(id)
                    vaciarCarrito()
                    setBadge(0)
                    setTotal(0)
                    Swal.fire(
                        {
                            title: `Gracias por su compra!`,
                            text: `El codigo de su orden de compra es: ${id}. Por favor guardelo para realizar el seguimiento de su compra`,
                            icon: `success`
                        }
                    )

                })
        }

    }
    const order = {
        nombre,
        mail
    }
    const ordersCollection = collection(db, "OrdenesDeCompra")

    return (
        <div>
            <h2 className='form-titulo'>Orden de compra</h2>
            <p className='form-text'>Complete sus datos para finalizar la compra</p>
            <form action="" className="form-compra" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} className="form-input" />
                <input type="email" placeholder="Email" onChange={(e) => setMail(e.target.value)} className="form-input" />
                <button type='submit' className="form-button">Realizar compra</button>
            </form>
        </div>
    )
}

export default CartForm