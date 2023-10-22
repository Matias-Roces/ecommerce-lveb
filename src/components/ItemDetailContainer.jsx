import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const { id } = useParams();

  // const getItems = async () => {
  //   const response = await fetch('/data.json')
  //   const data = await response.json()
  //   return data
  // }

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   getItems().then((p) => {
  //     setData(p)
  //   })
  // }, [])

  // const item = data.find((item) => {
  //   return item.id == id
  // })

  return (
    <div className="itemDetailContainer">
      {/* <ItemDetail item={item} /> */}
    </div>
  )
}

export default ItemDetailContainer