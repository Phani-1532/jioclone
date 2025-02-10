import React, { useEffect, useState } from 'react'
import styles from './Sports.module.css'
import Navigation from '../../components/header/Navigation'
import Shows from '../../components/shows/Shows'
import Carousel from '../../components/carousel/Carousel'
import Tags from '../../components/tags/Tags'

function Sports() {

  const [movies, setMovies] = useState([])

  //filtering the movies

  const [sports, setSports] = useState([])
  const [highlight, setHighlight] = useState([])
  const [bestMemories, setBestMemories] = useState([])
  const [kohli, setKohli] = useState([])
  const [ipl, setIpl] = useState([])
  const [bhuvi, setBhuvi] = useState([])


  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/movies')
      const data = await response.json()
      setMovies(data)

      //filtering the movies using filter method

      let sports = data.filter(movie => { return movie.genre.includes('Sport') })
      console.log(sports)
      setSports(sports)

      let highlight = data.filter(movie => { return movie.genre.includes('Cricket') })
      console.log(highlight)
      setHighlight(highlight.slice(0, 10))

      let bestMemories = data.filter(movie => { return movie.cricket === true })
      console.log(bestMemories)
      setBestMemories(bestMemories.slice(0, 10))

      let kohli = data.filter(movie => { return movie.kohli === true })
      console.log(kohli)
      setKohli(kohli.slice(0, 20))

      let ipl = data.filter(movie => { return movie.ipl === true })
      console.log(ipl)
      setIpl(ipl.slice(0, 20))

      let bhuvi = data.filter(movie => { return movie.bhuneswar === true })
      console.log(bhuvi)
      setBhuvi(bhuvi.slice(0, 20))
      
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
      <div className={styles.content}>
        <Shows title="Sports" movies={sports} />
        <Shows title="Cricket Highlights" movies={highlight} />
        <Shows title="Best Moments of india in 2024" movies={bestMemories} />
        <Shows title="Kohli's Best Moments" movies={kohli} />
        <Shows title="IPL 2024 moments" movies={ipl} />
        <Shows title="Bhuneswar's Best Moments" movies={bhuvi} />
      </div>
    </>
  )
}

export default Sports