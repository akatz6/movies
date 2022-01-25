import React, {Component} from 'react';
import axios from 'axios'


class AddMovie extends Component {

  state = {
    movieUpload:{
      title: "",
      watched: ""
    },
    movieTitles:[
    ],
    selectedValue: "",
  }

  componentDidMount(){
    this.getMovie();
  }

  getMovie = async () => {
    const movies = await axios.get("https://imdb-api.com/en/API/Top250Movies/k_vW0A3kY2")
    const titles = movies.data.items.map(element => element.title)
    this.setState({
      movieTitles:  titles
    })
  }
  onChangeMovie = (e) => {
     this.setState({movieUpload: {...this.state.movieUpload, [e.target.name] : e.target.value}});
  }

  uploadMovie = (e) => {
    e.preventDefault();
    // this.props.addMovie(this.state.selectedValue, this.state.movieUpload.watched);
    this.props.addMovie(this.state.movieUpload.title, this.state.movieUpload.watched);
    this.setState( {movieUpload: {...this.state.movieUpload, title: "", watched: ""}})
  }

  // handleChange = (e) => {
  //   console.log(e.target.value)
  //   this.setState({selectedValue: e.target.value})
  // }

  render(){
    return (
      <form onSubmit={this.uploadMovie}>
        <div className="form-group">
        {/* <select onChange={(e) => this.handleChange(e)}>
      {this.state.movieTitles.map(movieTitle => (
        <option className="text-primary" value={movieTitle} key={movieTitle} >{movieTitle} Test</option>
      ))}
    </select> */}
          <label className="text-primary">Movie Title</label>
          <input type="text" className="form-control"  placeholder="Enter title"
          name="title" value={this.state.movieUpload.title} onChange={this.onChangeMovie}/>
        </div>
        <div className="form-group">
          <label className="text-primary">Date Watched</label>
          <input type="date" className="form-control"
          name="watched" value={this.state.movieUpload.watched} onChange={this.onChangeMovie}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default AddMovie;
