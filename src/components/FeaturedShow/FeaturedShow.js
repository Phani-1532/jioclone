import React from 'react'
import './FeaturedShow.css'
import featured1 from '../../assets/featured1.jpeg'

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