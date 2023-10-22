import React from 'react'
import './Item.scss'
import { Link } from 'react-router-dom';

const Item = ({ p }) => {
    const { id, nombre, categoria } = p;

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
                    <Link to={`/ItemDetailContainer/${id}`}>
                        <button className='card-boton'>
                            Ver detalle
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Item