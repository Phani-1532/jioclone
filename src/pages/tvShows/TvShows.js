import React, { useEffect, useState } from 'react'
import Navigation from '../../components/header/Navigation'
import Shows from '../../components/shows/Shows'


function TvShows() {

  const [movies, setMovies] = useState([])

  //filtering the movies

  const [tvShows, setTvShows] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/movies')
      const data = await response.json()
      setMovies(data)

      //filtering the movies using filter method

      let tvShows = data.filter(movie => { return movie.genre.includes('TV Series') })
      console.log(tvShows)
      setTvShows(tvShows)
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
      <Shows title="Tv Shows" movies={tvShows} />
    </>


  )
}

export default TvShows