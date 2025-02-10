import React, { useEffect, useState } from 'react'
import Navigation from '../../components/header/Navigation'
import Shows from '../../components/shows/Shows'
import './TvShows.css'
import Carousel from '../../components/carousel/Carousel'
import Tags from '../../components/tags/Tags'

function TvShows() {

  const [movies, setMovies] = useState([])

  //filtering the movies

  const [tvShows, setTvShows] = useState([])
  const [tvShows2, setTvShows2] = useState([])
  const [tvShows3, setTvShows3] = useState([])
  const [tvShows4, setTvShows4] = useState([])
  const [tvShows5, setTvShows5] = useState([])
  const [tvShows6, setTvShows6] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/movies')
      const data = await response.json()
      setMovies(data)

      //filtering the movies using filter method

      let tvShows = data.filter(movie => { return movie.genre.includes('TV Series') })
      console.log(tvShows)
      setTvShows(tvShows.slice(0, 20))

      let tvShows2 = data.filter(movie => { return movie.genre.includes('TV Series', 'Drama') })
      console.log(tvShows2)
      setTvShows2(tvShows2.slice(20, 40))

      let tvShows3 = data.filter(movie => { return movie.genre.includes('Comedy') })
      console.log(tvShows3)
      setTvShows3(tvShows3.slice(0, 20))

      let tvShows4 = data.filter(movie => { return movie.genre.includes( 'Action') })
      console.log(tvShows4)
      setTvShows4(tvShows4.slice(0,20))

      let tvShows5 = data.filter(movie => { return movie.genre.includes( 'Crime') })
      console.log(tvShows5)
      setTvShows5(tvShows5.slice(0, 20))

      let tvShows6 = data.filter(movie => { return movie.genre.includes('Adventure') })
      console.log(tvShows6)
      setTvShows6(tvShows6.slice(0, 20))
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
      <Tags />
      <Carousel />
      <div className='content1'>
        <Shows title="Tv Shows" movies={tvShows} />
        <Shows title="Drama" movies={tvShows2} />
        <Shows title="Comedy" movies={tvShows3} />  
        <Shows title="Action" movies={tvShows4} />
        <Shows title="Crime" movies={tvShows5} />
        <Shows title="Adventure" movies={tvShows6} />
      </div>


    </>


  )
}

export default TvShows