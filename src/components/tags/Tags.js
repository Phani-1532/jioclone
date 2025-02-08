import React from 'react'
import './Tags.css'

function Tags() {
    const tags = ['All', 'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance','Kids', 'Thriller', 'War', 'Western']
  return (
    <>
        <div className="tags">
            {tags.map((item, index) => {
                return <div className="tag" key={index}>{item}</div>
            })}
        </div>

    </>
  )
}


export default Tags