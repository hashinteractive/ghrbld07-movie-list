import React, {Component} from 'react'

class AddMovie extends Component{
  constructor(props){
    super(props)
    this.updateValue = this.updateValue.bind(this)
    this.addMovie = this.addMovie.bind(this)
    this.state = {
      value: ''
    }
  }
  updateValue(e){
   const { target: { value } } = e
   this.setState({ value })
  }
  addMovie(){
    let { value: current } = this.state
    if(!current) return

    this.props.add(current)
    this.setState({ value: '' })
  }
  render(){
    return(
      <div className="inline-flex mt-4">
        <input onChange={this.updateValue} value={this.state.value} className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none leading-normal" placeholder="add a movie..." />
        <button onClick={this.addMovie} className="w-1/4 bg-green-400 text-white py-2 px-4 text-sm">
          Add
        </button>
      </div>
    )
  }
}

export default AddMovie