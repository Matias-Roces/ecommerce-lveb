import React from 'react'
import ItemCount from './ItemCount'
import './ItemDetail.scss'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ data }) => {
    const { id } = useParams();
    console.log(id);

    // const item = data.find((it) => {        
    //     return (it.id === id)        
    // })    
    const itemFilter = data.filter((item) => item.id == id)
    // )}
    // const { nombre } = item;
    //console.log(item)
    return (<>
        {
            itemFilter.map((item) => {
                return (
                    <div key={id} className='detail-card'>
                        <div className='detail-card-body'>
                            <img
                                src='https://placehold.co/601x746'
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
                            <ItemCount />
                        </div>
                    </div >
                )
            })
        }
    </>)
}

export default ItemDetail