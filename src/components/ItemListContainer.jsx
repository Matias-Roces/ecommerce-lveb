import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useParams } from "react-router-dom"
import Loader from "./loader"

const ItemListContainer = () => {
    // el useParams me trae la categoría desde el dropdown item
    const { categoria } = useParams()
    // utilizo un hook de estado para items con el fin de actualizarlo cuando se llama a la base de datos
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)
    
    useEffect(() => {
        // llamo a la Base de datos una vez con el hook de efecto y para guardar los datos de los productos en el estado de items
        const db = getFirestore()
        const itemsCollection = collection(db, "Productos")
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((x) => ({ id: x.id, ...x.data() }));            
            setItems(docs);
            setLoader(false)
        })
    }, [])
    // declaro un array que filtra si hay alguna categoria
    const itemFiltered = items.filter((item) => item.categoria === categoria);
    if (loader) {
        return (
            <Loader />
        )
    }


    return (
        // uso un ternario para preguntar si itemFiltered es mayor a cero, es decir si se filtró algun producto por categoría. 
        itemFiltered.length === 0 ? <ItemList items={items} /> : <ItemList items={itemFiltered} />
    )
}
export default ItemListContainer                        