import React from 'react'
import './Loader.scss'

const Loader = () => {
    return (
        <div className='loader-container'>
            <div className="loader">
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
                <div className="loader-square"></div>
            </div>
        </div>
    )
}

export default Loader