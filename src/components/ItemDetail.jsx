import React from 'react'
import ItemCount from './ItemCount'
import './ItemDetail.scss'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ data: item }) => {    

    // const { id } = useParams()
    // console.log(item)
    
    return (<>
        {
            <div key={item.id} className='detail-card'>
                <div className='detail-card-body'>
                    <img
                        src={item.img}
                        alt={item.nombre}
                        className='detail-card-img' />
                    <div className='detail-card-texto'>
                        <h3 className='detail-card-titulo'>
                            {/* Titulo del producto larguisimo */}
                            {item.nombre}
                        </h3>
                        <p className='detail-card-categoria'>
                            {/* Categoria */}
                            {item.categoria}
                        </p>
                        <p className="detail-card-descripcion">
                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eum. */}
                            {item.descripcion}
                        </p>
                        <p className="detail-card-precio">
                            {/* $ 1234 */}
                            $ {item.precio}
                        </p>
                    </div>
                </div>
                <hr />
                
                
                <div className='botonera'>
                    <ItemCount item={item} />
                </div>
            </div >
        }
    </>)
}

export default ItemDetail