import React from 'react'
import './Show.css'

function Show({movie}) {
    return (
        <>
            <div className='showsChild'>
                <img src={movie.image_url} alt='show' />
                <div className='movieTitle'>
                    <p>{movie.title}</p>
                </div>
            </div>
        </>
    )
}

export default Show