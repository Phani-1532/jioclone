import React from 'react'
import './Navigation.css'
import profile from '../../assets/download.png'

function Navigation() {
    let navLinks = ['Home', 'Sports', 'Movies', 'Tv Shows', 'More']
    return (
        <>
            <header className='header'>
                <nav className='navigation'>
                    <div className='logo'>
                        <img src={profile} alt="jio logo" /><h1>JioCinema</h1>
                        <div className="premium">
                        <i class="fa-solid fa-crown"></i><p>Go Premium</p>
                        </div>
                    </div>
                    <div >
                        <ul className="navLinks">
                            {navLinks.map((link) => {
                                return <li className='navLink'>{link}</li>
                            })}
                        </ul>

                    </div>
                </nav>
                <div className="search">
                    <div className='searchBox'>
                        <div className='searchIcon'>
                            <i className='fa-solid fa-magnifying-glass'></i>
                        </div>
                        <input type="text" placeholder='Movies, Shows and more' className='searchInput' />
                        <div className='micIcon'>
                            <i className='fa-solid fa-microphone'></i>
                        </div>
                    </div>
                    <div className='profile'>
                        <i className='fa-solid fa-user'></i>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navigation