import React, { useState } from 'react'
import './Tags.css'
import Shows from '../shows/Shows'


function Tags({ movies }) {
  const [visibleMovies, setVisibleMovies] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const [tag, setTag] = useState('')
  const tags = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Kids', 'Thriller', 'War', 'Western']

  const handleTagClick = (tag) => {
    // Filter movies based on the selected tag
    const filteredMovies = movies.filter(movie => movie.genre.includes(tag))
    setTag(tag)
    setVisibleMovies(filteredMovies)
    setIsVisible(true) // Show the movies
  }

  const handleHideMovies = () => {
    setIsVisible(false) // Hide the movies
  }

  return (
    <>
      <div className="tags">
        {tags.map((tag, index) => {
          return <div className="tag" key={index} onClick={() => handleTagClick(tag)}>{tag}</div>
        })}
      </div>

      {isVisible && (
        <div className="tags-display">
          <div className="tags-display-header">
          <h2>{tag} Movies</h2>
          <button onClick={handleHideMovies}>Hide Movies</button>
          </div>
          <Shows title={tag} movies={visibleMovies.slice(0, 10)} />
          <Shows movies={visibleMovies.slice(10, 20)} />
          <Shows movies={visibleMovies.slice(20, 30)} />
          <Shows movies={visibleMovies.slice(30, 40)} />
        </div>
      )}
    </>
  )
}


export default Tags