import React, {Component} from 'react'
import MovieListItem from './MovieListItem'
import MovieListClass from './MovieList.module.css'


class MovieList extends Component{
  constructor(props){
    super(props)
    this.toggleList = this.toggleList.bind(this)
    this.state = {
      watched: true
    }
  }
  toggleList(watched){
    this.setState({ watched: watched })
  }
  render(){
    let movies = [] 
    if(this.props.movies.length){
      movies = [...this.props.movies].filter( movie => movie.watched === this.state.watched)
               .map( movie => 
                 <MovieListItem
                   key={movie.id}
                   movie={movie}
                   toggle={this.props.toggle.bind(null, movie)} />
               )
    }
    const bgWatched = this.state.watched ? 'bg-green-400 text-white' : 'bg-gray-300'
    const bgToWatch = !this.state.watched ? 'bg-green-400 text-white' : 'bg-gray-300'
    return(
      <div className="flex flex-col mt-4">
        <div className="flex">
          <button onClick={this.toggleList.bind(this, true)} className={ bgWatched + " py-2 px-4 focus:outline-none" }>Watched</button> 
          <button onClick={this.toggleList.bind(this, false)} className={ bgToWatch + " py-2 px-4 focus:outline-none" }>To Watch</button> 
        </div>
        <div>
          { (movies.length && movies) || (
            <div className="px-5 py-3">Sorry, no movies listed</div>
          )}
        </div>
      </div>
    )
  }
}

export default MovieList