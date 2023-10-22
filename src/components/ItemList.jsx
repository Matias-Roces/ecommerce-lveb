import React from 'react'
import Item from './Item'
import './ItemList.scss'

const ItemList = ({ data }) => {
  return (
    <div className="card-container">
      {
        data.map((p) => {
          return (
            <Item key={p.id} p={p} />
          )
        })
      }
    </div>
  )
}

export default ItemList