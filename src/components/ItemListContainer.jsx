import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import './ItemListContainer.scss'

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
    return (
        <div className="card-container">
            <ItemList data={data}/>
            {/* <Center>{productos}</Center> */}
        </div>

    )
}

export default ItemListContainer