import React, {Component} from 'react'
import MovieListItem from './MovieListItem'
import MovieListClass from './MovieList.module.css'


class MovieList extends Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <div className="mt-4">
        {this.props.movies.map( movie => <MovieListItem key={movie.id} movie={movie} /> )}
      </div>
    )
  }
}

export default MovieList