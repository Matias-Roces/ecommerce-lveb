import React from 'react'
import Item from './Item'
import './ItemList.scss'

const ItemList = ({ items }) => {
  
  return (
    <div className="card-container">
      {
        items.map((p) => {
          return (
            <Item key={p.id} p={p} />
          )
        })
      }
    </div>
  )
}

export default ItemList