import React from 'react'
import './Home.css'
import Navigation from '../components/header/Navigation'
import Tags from '../components/tags/Tags'
import Channel from '../components/channels/Channel'
import Carousel from '../components/carousel/Carousel'
import Featured from '../components/feature/Featured'

function Home() {
  return (
    <>
        <Navigation />
        <Tags />
        <Carousel />
        <Channel />
        <Featured />
        </>

  )
}

export default Home