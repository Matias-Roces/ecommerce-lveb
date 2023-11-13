import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import Loader from './loader'

const ItemDetailContainer = () => {

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true)

  const { id } = useParams()    

  useEffect(() => {
    const db = getFirestore()
    const oneItem = doc(db, "Productos", `${id}`)
    getDoc(oneItem)
      .then((snapshot)=>{
        if(snapshot.exists) {
          // const docs = snapshot.data()          
          // setData(docs)
          setData({ id: snapshot.id, ...snapshot.data() });          
          setLoader(false)
        }        
      })
  }, [])
  
  if (loader) {
    return (
      <Loader />
    )
  }
  return (
    <div className="itemDetailContainer">
      <ItemDetail data={data} />
    </div>
  )
}

export default ItemDetailContainer