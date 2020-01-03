import React, {Component} from 'react'

class Search extends Component{
  constructor(props){
    super(props)
    this.updateValue = this.updateValue.bind(this)
    this.state = {
      value: ''
    }
  }
  updateValue(e){
   const { target: { value } } = e
   this.setState({ value })
  }
  render(){
    return(
      <div className="inline-flex mt-4">
        <input onChange={this.updateValue} value={this.state.value} className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none leading-normal" placeholder="search movies..." />
        <button onClick={() => { this.props.search(this.state.value) }} className="w-1/4 bg-gray-300 text-gray-700 py-2 px-4">
          Search
        </button>
      </div>
    )
  }
}

export default Search