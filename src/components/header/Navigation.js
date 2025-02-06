import React from 'react'
import './Navigation.css'

function Navigation() {
    let navLinks = ['Home', 'Sports', 'Movies', 'Tv Shows', 'More']
    return (
        <>
            <header className='header'>
                <nav className='navigation'>
                    <div className='logo'>
                        <img src='' alt="jio logo" />
                        <div className="premium">
                            <img src='' alt='crown' /><p>Go Premium</p>
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
                            <img src='' alt='search' />
                        </div>
                        <input type="text" placeholder='Search' className='searchInput' />
                        <div className='micIcon'>
                            <img src='' alt='mic' />
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navigation