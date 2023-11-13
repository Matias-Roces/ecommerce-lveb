import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext(null)
const carrito = [];
export const ShoppingCartProvider = ({ children }) => {
    //Espacio para crear estados variables funciones... etc        
    // variable para el numerito del icono del carrito
    const [badge, setBadge] = useState(0)
    // variable para el total de la compra
    const [total, setTotal] = useState(0)

    const agregarAlCarrito = (item, cantidad) => {

        if (carrito.includes(item)) {
            Swal.fire(
                {
                    title: `El producto ya está en el carrito`,
                    text: `Se han agregado ${cantidad} unidad(es) de ${item.nombre} al carrito`,
                    icon: `Info`
                }
            )
            item.cantidad += cantidad;
            setTotal(total + (cantidad * item.precio))
            setBadge(badge + cantidad)
        }
        else {
            item.cantidad = cantidad;
            carrito.push(item)
            setBadge(badge + item.cantidad)
            setTotal(total + (cantidad * item.precio))
            const Toast = Swal.mixin({
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Producto agregado al carrito"
            });
        }
    }
    //
    const eliminarItem = (id, cantidad, precio) => {
        const indice = carrito.indexOf(id);
        carrito.splice(indice, 1);
        setTotal(total - (cantidad * precio))
        setBadge(badge - cantidad)
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "error",
            title: "Producto eliminado del carrito correctamente"
        });
    }
    const vaciarCarrito = () => {
        carrito.splice(0, carrito.length)
        setTotal(0)
        setBadge(0)
    }

    return (
        <CartContext.Provider value={{ badge, setBadge, agregarAlCarrito, eliminarItem, vaciarCarrito, carrito, total, setTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider