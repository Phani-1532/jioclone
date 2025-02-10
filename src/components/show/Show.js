import React from 'react'
import './Show.css'

function Show({movie}) {
    return (
        <>
            <div className='showsChild'>
                <img src={movie.image_url} alt='show' />
                <div className='movieTitle'>
                    <p>{movie.title}</p>
                    <p>{movie.description}</p>
                    <div className='buttons'>
                        <button>Watch Now</button>
                        <button><a href={movie.trailer_url} target='_blank' rel='noopener noreferrer'>Trailer</a></button>
                    </div>      
                </div>
            </div>
        </>
    )
}

export default Show