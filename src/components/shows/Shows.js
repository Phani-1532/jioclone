import React from 'react'
import './Shows.css'
import Show from '../show/Show'

function Shows({title, featureMovies, animeMovies, actionMovies, topRatedMovies, hindiMovies, teluguMovies, englishMovies}) {
  return (
    <>
        <section className='shows'>
            <h1 className='shows-title'>{title}</h1>
            <div className='showsParent'>
                <Show featureMovies = {featureMovies}  />  {/*we are getting it from show.js */}
                <Show animeMovies = {animeMovies}  />  {/*we are getting it from show.js */}
                <Show actionMovies = {actionMovies}  />  {/*we are getting it from show.js */}
                <Show topRatedMovies = {topRatedMovies}  />  {/*we are getting it from show.js */}
                <Show hindiMovies = {hindiMovies}  />  {/*we are getting it from show.js */}
                <Show teluguMovies = {teluguMovies}  />  {/*we are getting it from show.js */}
                <Show englishMovies = {englishMovies}  />  {/*we are getting it from show.js */}
            </div>
        </section>
    </>
  )
}

export default Shows