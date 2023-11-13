import './Cart.scss'
import Loader from './loader';
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import ItemCartMap from './ItemCartMap';

const Cart = () => {
  const { carrito } = useContext(CartContext);
  const [Loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(false)
  }, [])
  
  return (
    <div>
      {Loading ? <Loader /> : 
      <div className="cart">
        <ItemCartMap carrito={carrito}/>
      </div>}
    </div>
    )
}

export default Cart
