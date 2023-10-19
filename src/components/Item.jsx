import React from 'react'
import './Item.scss'
const Item = ({ p }) => {
    const { nombre, categoria } = p;

    return (
        <>
            <div className='card'>
                <div className='card-body'>
                    <img
                        src='https://placehold.co/601x746'
                        alt={nombre}
                        className='card-img'
                    />
                    <div className='card-texto'>
                        <h3 className='card-titulo'>{nombre}</h3>
                        <p className='card-categoria'>
                            {categoria}
                        </p>
                    </div>
                </div>
                <hr />
                <div className='botonera'>
                    <button className='card-boton'>
                        Ver detalle
                    </button>
                </div>
            </div >
        </>
    )
}

export default Item