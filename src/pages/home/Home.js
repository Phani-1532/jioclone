import React, { useEffect, useState } from 'react'
import './Home.css'
import Navigation from '../../components/header/Navigation'
import Tags from '../../components/tags/Tags'
import Channel from '../../components/channels/Channel'
import Carousel from '../../components/carousel/Carousel'
import Featured from '../../components/feature/Featured'
import Shows from '../../components/shows/Shows'

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
  const [japaneseMovies, setJapaneseMovies] = useState([])
  const [horrorMovies, setHorrorMovies] = useState([])
  const [comedyMovies, setComedyMovies] = useState([])
  const [romanceMovies, setRomanceMovies] = useState([])
  const [thrillerMovies, setThrillerMovies] = useState([])
  const [crimeMovies, setCrimeMovies] = useState([])
  const [tvShows, setTvShows] = useState([])
  const [sports, setSports] = useState([])


  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/movies')
      const data = await response.json()
      setMovies(data)

      //filtering the movies using filter method

      let featureMovies = data.filter(movie => { return movie.featured === true })
      console.log(featureMovies)
      setFeaturedMovies(featureMovies)

      let aniMovies = data.filter(movie => { return movie.genre.includes('Animation') })
      console.log(aniMovies)
      setAnimeMovies(aniMovies)

      let actMovies = data.filter(movie => { return movie.genre.includes('Action') })
      console.log(actMovies)
      setActionMovies(actMovies)

      let topRatedMovies = data.filter(movie => { return movie.top_rated === true })
      console.log(topRatedMovies)
      setTopRatedMovies(topRatedMovies)

      let telMovies = data.filter(movie => { return movie.language === 'Telugu' })
      console.log(telMovies)
      setTeluguMovies(telMovies)

      let hinMovies = data.filter(movie => { return movie.language === 'Hindi' })
      console.log(hinMovies)
      setHindiMovies(hinMovies)

      let engMovies = data.filter(movie => { return movie.language === 'English' })
      console.log(engMovies)
      setEnglishMovies(engMovies)

      let japMovies = data.filter(movie => { return movie.language === 'Japanese' })
      console.log(japMovies)
      setJapaneseMovies(japMovies)

      let horMovies = data.filter(movie => { return movie.genre.includes('Horror') })
      console.log(horMovies)
      setHorrorMovies(horMovies)

      let comMovies = data.filter(movie => { return movie.genre.includes('Comedy') })
      console.log(comMovies)
      setComedyMovies(comMovies)

      let romMovies = data.filter(movie => { return movie.genre.includes('Romance') })
      console.log(romMovies)
      setRomanceMovies(romMovies)

      let thrMovies = data.filter(movie => { return movie.genre.includes('Thriller') })
      console.log(thrMovies)
      setThrillerMovies(thrMovies)

      let criMovies = data.filter(movie => { return movie.genre.includes('Crime') })
      console.log(criMovies)
      setCrimeMovies(criMovies)

      let tvShows = data.filter(movie => { return movie.genre.includes('TV Series') })
      console.log(tvShows)
      setTvShows(tvShows)

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
      <Tags movies = {movies} />
      <Carousel />
      <Channel />
      <Featured featuredMovies={featuredMovies} />

      <Shows title="Anime Fever" movies={animeMovies} />
      <Shows title="Top Rated" movies={topRatedMovies} />
      <Shows title="Telugu Movies" movies={teluguMovies} />
      <Shows title="Hindi Movies" movies={hindiMovies} />
      <Shows title="English Movies" movies={englishMovies} />
      <Shows title="Action Movies" movies={actionMovies} />
      <Shows title="Japanese Movies" movies={japaneseMovies} />
      <Shows title="Horror Movies" movies={horrorMovies} />
      <Shows title="Comedy Movies" movies={comedyMovies} />
      <Shows title="Romance Movies" movies={romanceMovies} />
      <Shows title="Thriller Movies" movies={thrillerMovies} />
      <Shows title="Crime Movies" movies={crimeMovies} />
      <Shows title="Tv Shows" movies={tvShows} />
      <Shows title="Sports" movies={sports} />
    </>


  )
}

export default Home