import React from 'react'
import './Shows.css'
import Show from '../show/Show'

function Shows(props) {
  return (
    <>
        <section className='shows'>
            <h1 className='shows-title'>{props.title}</h1>
            <div className='showsParent'>
               {
                props.movies.map((movie, index) => {
                  return <Show key={index} movie={movie} />
                })
               }
            </div>
        </section>
    </>
  )
}

export default Shows