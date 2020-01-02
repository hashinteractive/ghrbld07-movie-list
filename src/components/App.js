import React, {Component} from 'react'
import AppClass from './App.module.css'
import MovieList from './MovieList'
import Search from './Search'

class App extends Component{
  constructor(){
    super()
    this.state = {
      movies: [
        {id: 1, title: 'Mean Girls'},
        {id: 2, title: 'Hackers'},
        {id: 3, title: 'The Grey'},
        {id: 4, title: 'Sunshine'},
        {id: 5, title: 'Ex Machina'},
      ]
    }
  }
  render(){
    return(
      <div className="flex flex-col max-w-xl mx-auto border border-gray-300">
        <div className="w-100 py-3 px-5 bg-gray-200">
          <h5 className="text-lg text-gray-900">Movie List</h5>
        </div>
        <div class="flex flex-col w-100 px-8 mt-8">
          <Search />
          <MovieList movies={this.state.movies} />
        </div>
      </div>
    )
  }
}

export default App