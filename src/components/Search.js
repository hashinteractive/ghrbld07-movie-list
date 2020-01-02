import React, {Component} from 'react'

class Search extends Component{
  render(){
    return(
      <div className="inline-flex mt-4">
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none leading-normal" placeholder="search movies..." />
        <button className="bg-teal-500 hover:bg-teal-700 text-white py-2 px-4">
          Search
        </button>
      </div>
    )
  }
}

export default Search