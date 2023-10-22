import React from 'react'
import ItemCount from './ItemCount'
import './ItemDetail.scss'

const ItemDetail = ({ item }) => {
    const { nombre, categoria, descripcion, precio } = item;
    return (
        <div className='detail-card'>
            <div className='detail-card-body'>
                <img
                    src='https://placehold.co/601x746'
                    alt={nombre}
                    className='detail-card-img'
                />
                <div className='detail-card-texto'>
                    <h3 className='detail-card-titulo'>
                        {nombre}
                    </h3>
                    <p className='detail-card-categoria'>
                        {categoria}
                    </p>
                    <p className="detail-card-descripcion">
                        {descripcion}
                    </p>
                    <p className="detail-card-precio">
                        {precio}
                    </p>
                </div>
            </div>
            <hr />
            <div className='botonera'>
                <ItemCount />
            </div>
        </div >
    )
}

export default ItemDetail