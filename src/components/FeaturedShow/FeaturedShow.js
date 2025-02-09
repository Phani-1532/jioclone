import React from 'react'
import './FeaturedShow.css'

function FeaturedShow({movie}) {
    return (

        <>
            <div className='featuredShow'>
                <img src={movie.image_url} alt='featured' />
                <div className = 'movieTitle'>
                    <p>{movie.title}</p>
                </div>
            </div>
        </>
    )
}

export default FeaturedShow