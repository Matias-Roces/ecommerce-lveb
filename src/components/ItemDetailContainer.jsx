import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'

const ItemDetailContainer = () => { 

  const getItems = async () => {
    const response = await fetch('/data.json');
    const data = await response.json();    
    return data;
  }  

  const [data, setData] = useState([]);
  
  useEffect(() => {
    getItems().then((p) => {      
      setData(p)
    }).catch(()=>{
      return (
        <>no fue posible cargar los datos</>
      )}
    )
  }, [])   

  return (
    <div className="itemDetailContainer">
      <ItemDetail data={data} />
    </div>
  )
}

export default ItemDetailContainer