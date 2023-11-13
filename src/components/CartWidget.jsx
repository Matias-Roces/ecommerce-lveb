import { Link } from 'react-router-dom'
import './CartWidget.scss'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
const CartWidget = () => {
    // useContext 
    const { badge, carrito } = useContext(CartContext)

    //

    return (
        <div className="cart-widget">
            <div className="widget-container">
                <Link to={"/Cart"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart cart-icon" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <div className="badge-container" style={{ display: badge === 0 ? 'none' : 'flex' }}>
                        {badge}
                    </div>
                </Link>
            </div >
        </div >
    )
}

export default CartWidget