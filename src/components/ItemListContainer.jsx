import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    // el useParams me trae la categoría desde el dropdown item
    const { categoria } = useParams()
    //getItems llama a la API de los productos
    const getItems = async () => {
        const response = await fetch('/data.json')
        const data = await response.json()
        return data
    }
    // utilizo un hook de estado para items con el fin de actualizarlo cuando se realiza el fetch
    const [items, setItems] = useState([])
    // utilizo un hook de efecto para que al ejecutar el fetch, se carguen los datos en items o se filtren si categoria cambia
    useEffect(() => {
        getItems().then((data) => {
            // valido que el parametro de categoria no esté definido para traerme todos los productos o filtrarlos segun la categoria
            if (categoria !== undefined) {
                const itemFiltered = data.filter((items) => items.categoria === categoria);
                setItems(itemFiltered);
            }
            else {
                setItems(data);
            }
        })
    }, [categoria])

    return (
        // uso props para pasarle a los items sus datos. 
        <ItemList items={items} />
    )
}
export default ItemListContainer