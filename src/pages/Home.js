import React, { useEffect, useState } from 'react'
import './Home.css'
import Navigation from '../components/header/Navigation'
import Tags from '../components/tags/Tags'
import Channel from '../components/channels/Channel'
import Carousel from '../components/carousel/Carousel'
import Featured from '../components/feature/Featured'
import Shows from '../components/shows/Shows'

function Home() {

  const [movies, setMovies] = useState([])

  //filtering the movies

  const [featuredMovies, setFeaturedMovies] = useState([])
  const [animeMovies, setAnimeMovies] = useState([])
  const [actionMovies, setActionMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [hindiMovies, setHindiMovies] = useState([])
  const [englishMovies, setEnglishMovies] = useState([])
  const [teluguMovies, setTeluguMovies] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/movies')
      const data = await response.json()
      setMovies(data)

      //filtering the movies using filter method

      let featureMovies = data.filter(movie => { return movie.featured === true })
      console.log(featureMovies)
      setFeaturedMovies(featureMovies.slice(0, 5))

      let aniMovies = data.filter(movie => {return movie.genre.includes('Animation')})
      console.log(aniMovies)
      setAnimeMovies(aniMovies)

      let actMovies = data.filter(movie => {return movie.genre.includes('Action')})
      console.log(actMovies)
      setActionMovies(actMovies)

      let topRatedMovies = data.filter(movie => {return movie.top_rated === true})
      console.log(topRatedMovies)
      setTopRatedMovies(topRatedMovies)

      let telMovies = data.filter(movie => {return movie.language === 'Telugu'})
      console.log(telMovies)
      setTeluguMovies(telMovies)

      let hinMovies = data.filter(movie => {return movie.language === 'Hindi'})
      console.log(hinMovies)
      setHindiMovies(hinMovies)

      let engMovies = data.filter(movie => { return movie.language === 'English' })
      console.log(engMovies)
      setEnglishMovies(engMovies)

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
      <Navigation />
      <Tags />
      <Carousel />
      <Channel />
      <Featured featuredMovies={featuredMovies} />

      <Shows title="Anime Fever" movies={animeMovies} />
      <Shows title="Action Movies" movies={actionMovies} />
      <Shows title="Top Rated" movies={topRatedMovies} />
      <Shows title="Telugu Movies" movies={teluguMovies} />
      <Shows title="Hindi Movies" movies={hindiMovies} />
      <Shows title="English Movies" movies={englishMovies} />
      




    </>


  )
}

export default Home