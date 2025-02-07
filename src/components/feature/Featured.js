import React from 'react'
import './Featured.css'
import FeaturedShow from '../FeaturedShow/FeaturedShow'
function Featured() {
    return (
        <>
            <section className='featured'>
                <h1 className='featured-title'>Hot Right Now 🔥 </h1>
                <div className = 'shows'>
                   <FeaturedShow />
                   <FeaturedShow />
                   <FeaturedShow />
                   <FeaturedShow />
                </div>
            </section>
        </>

    )
}

export default Featured