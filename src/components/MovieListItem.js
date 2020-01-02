import React from 'react'

const MovieListItem = ({movie}) => {
  return(
    <div className="flex px-5 py-3 border border-gray-300">
      <h5 className="text-lg text-gray-800">{movie.title}</h5> 
    </div>
  )
}

export default MovieListItem