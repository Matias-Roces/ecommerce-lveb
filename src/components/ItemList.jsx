import React from 'react'
import Item from './Item'

const ItemList = ({ data }) => {
  return (
    <>
      {
        data.map((p) => {
          return (
            <Item key={p.id} p={p} />
          )
        })
      }
    </>
  )
}

export default ItemList