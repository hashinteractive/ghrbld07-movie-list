import React, {Component} from 'react'
import AppClass from './App.module.css'
import MovieList from './MovieList'
import Search from './Search'
import AddMovie from './AddMovie'

// const defaults = [
//   {id: 1, title: 'Mean Girls'},
//   {id: 2, title: 'Hackers'},
//   {id: 3, title: 'The Grey'},
//   {id: 4, title: 'Sunshine'},
//   {id: 5, title: 'Ex Machina'},
// ];

class App extends Component{
  constructor(){
    super()
    this.addMovie = this.addMovie.bind(this)
    this.searchMovies = this.searchMovies.bind(this)
    this.toggleWatched = this.toggleWatched.bind(this)
    this.state = {
      movies: [
        {id: 1, title: 'Mean Girls', watched: true},
        {id: 2, title: 'Hackers', watched: false},
      ],
      defaults: [
        {id: 1, title: 'Mean Girls', watched: true},
        {id: 2, title: 'Hackers', watched: false},
      ]
    }
  }
  searchMovies(value){
    if(!value){
      //if value is empty then make movies the defaults store
      return this.setState({ movies: [...this.state.defaults] })
    }
    const movies = [...this.state.movies].filter( movie => movie.title.includes(value))
    this.setState({ movies }) 
  }
  addMovie(value){
    const maxId = this.state.movies.length ? Math.max(...this.state.movies.map(m => m.id)) : 0
    const movie = {
      title: value,
      id: maxId + 1,
      watched: true 
    }
    this.setState({ movies: [...this.state.movies, movie] }, () => {
      //when adding a successful movie update all movies to defaults
      this.setState({ defaults: [...this.state.movies] })
    })
  }
  toggleWatched(movie){
    const movieIndex = this.state.movies.findIndex(m => m.id === movie.id)
    const toggled = {
      ...movie,
      watched: !movie.watched
    }

    const changed = [...this.state.movies]
    changed[movieIndex] = toggled
    this.setState({ movies: changed }, () => {
      this.setState({ defaults: [...this.state.movies] })
    })
  }
  render(){
    return(
      <div className="flex flex-col max-w-xl mx-auto my-8 border border-gray-300">
        <div className="w-100 py-3 px-5 bg-gray-200">
          <h5 className="text-2xl text-gray-900">Movie List</h5>
        </div>
        <div className="flex flex-col w-100 p-8">
          <AddMovie add={this.addMovie} />
          <Search search={this.searchMovies} />
          <MovieList 
            movies={this.state.movies}
            toggle={this.toggleWatched} />
        </div>
      </div>
    )
  }
}

export default App