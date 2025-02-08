import React from 'react'
import './Featured.css'
import FeaturedShow from '../FeaturedShow/FeaturedShow'
function Featured({featuredMovies}) {
    return (
        <>
            <section className='featured'>
                <h1 className='featured-title'>Hot Right Now 🔥 </h1>
                <div className = 'showsFeatured'>
                   
                   {featuredMovies.map((movie, index) => {
                    return <FeaturedShow key={index} movie={movie} />
                   })}
                </div>
            </section>
        </>

    )
}

export default Featured