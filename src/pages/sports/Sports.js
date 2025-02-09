import React, { useEffect, useState } from 'react'
import styles from './Sports.module.css'
import Navigation from '../../components/header/Navigation'
import Shows from '../../components/shows/Shows'


function Sports() {

  const [movies, setMovies] = useState([])

  //filtering the movies

  const [sports, setSports] = useState([])


  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/movies')
      const data = await response.json()
      setMovies(data)

      //filtering the movies using filter method

      let sports = data.filter(movie => { return movie.genre.includes('Sport') })
      console.log(sports)
      setSports(sports)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Navigation movies={movies} />
      <div className={styles.content}>
        <Shows title="Sports" movies={sports} />
      </div>

    </>
  )
}

export default Sports