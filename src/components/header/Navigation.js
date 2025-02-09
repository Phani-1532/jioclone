import React, { useEffect, useState } from 'react'
import './Navigation.css'
import profile from '../../assets/download.png'
import Show from '../show/Show'
import { Link } from 'react-router-dom'

function Navigation({ movies }) {

    const [searchInput, setSearchInput] = useState('')
    const [filteredMovies, setFilteredMovies] = useState([])

    useEffect(() => {
        if (searchInput !== '') {
            let filteredMovies = movies.filter((movie) => {
                return movie.title.toUpperCase().includes(searchInput.toUpperCase())
            })
            setFilteredMovies(filteredMovies)
            console.log(filteredMovies)
        } else {
            setFilteredMovies([])
        }

    }, [searchInput])


    let navLinks = ['Home', 'Sports', 'Movies', 'Tv Shows', 'More']
    return (
        <>
            <header className='header'>
                <nav className='navigation'>
                    <div className='logo'>
                        <img src={profile} alt="jio logo" /><h1>JioCinema</h1>
                        <div className="premium">
                            <i className="fas fa-crown" style={{ color: '#d4be42' }}></i>
                            <span>Go Premium</span>
                        </div>
                    </div>
                    <div >
                        <ul className="navLinks">
                            {navLinks.map((link) => {
                                return <Link to = {`/${link}`}  className='navLink'>{link}</Link>
                            })}
                        </ul>

                    </div>
                </nav>
                <div className="search">
                    <div className='searchBox'>
                        <div className='searchIcon'>
                            <i className='fa-solid fa-magnifying-glass'></i>
                        </div>
                        <input value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }} type="text" placeholder='Movies, Shows and more' className='searchInput' />
                        <div className='micIcon'>
                            <i className='fa-solid fa-microphone'></i>
                        </div>
                    </div>
                    <div className='profile'>
                        <i className='fa-solid fa-user'></i>
                    </div>
                </div>
            </header>

            {filteredMovies.length > 0 ? <div className='filteredMovies'>
                {filteredMovies.map(movie => {
                    return <Show key={movie.id} movie={movie} />
                })}
            </div> : null}


        </>
    )
}

export default Navigation