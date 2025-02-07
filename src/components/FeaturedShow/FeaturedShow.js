import React from 'react'
import './FeaturedShow.css'
import featured1 from '../../assets/featured1.jpeg'

function FeaturedShow() {
    return (

        <>
            <div className='featuredShow'>
                <img src={featured1} alt='featured' />
            </div>
        </>
    )
}

export default FeaturedShow