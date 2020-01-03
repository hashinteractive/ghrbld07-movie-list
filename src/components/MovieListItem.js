import React, {Component} from 'react'

class MovieListItem extends Component{
  constructor(props){
    super(props)
    this.toggleShow = this.toggleShow.bind(this)
    this.state = {
      show: false
    }
  }
  toggleShow(){
    this.setState( { show: !this.state.show })
  }
  render(){
    const bg = this.props.movie.watched ? 'bg-green-400' : 'bg-blue-400'
    return(
      <div className="flex flex-col border border-gray-300">
        <div className="w-full flex justify-between items-center px-5 py-3">
          <h5 onClick={this.toggleShow} className="text-lg text-gray-800 flex-grow cursor-pointer">{this.props.movie.title}</h5> 
          <span onClick={this.props.toggle} className={ bg + " rounded-full text-white text-xs px-2 py-1 cursor-pointer"}>{ this.props.movie.watched ? 'watched' : 'to watch' }</span>
        </div>
        { this.state.show && (
          <div className="w-full bg-gray-200 text-gray-800 border-t border-gray-300 p-4">
            <ul className="list-none">
              { Object.keys(this.props.movie.details).map(key => <li key={key}><span className="font-bold capitalize">{key}:</span> {this.props.movie.details[key]} </li> ) }
            </ul>
          </div> )
        }
      </div>
    )
  }
}

export default MovieListItem