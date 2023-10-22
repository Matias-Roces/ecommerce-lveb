import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const getProducts = async () => {
        const response = await fetch('/data.json')
        const data = await response.json()        
        return data
    }
    const [data, setData] = useState([])

    useEffect(() => {
        getProducts().then((p) => {
            setData(p)
        })
    }, [])

    const { categoria } = useParams()
    console.log(categoria)

    useEffect(() => {
        if (categoria != undefined) {
            const filtrarPorCategoria = data.filter(({ categoria:cat })=>{
                return cat == categoria               
            })
            console.log(filtrarPorCategoria)
            setData(filtrarPorCategoria)         
        }         
    }, [categoria])
    return (
        <ItemList data={data}/>
    )
}
export getProducts()
export default ItemListContainer