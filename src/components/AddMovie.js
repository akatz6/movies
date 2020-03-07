import React, {Component} from 'react';


class AddMovie extends Component {

  state = {
    movieUpload:{
      title: "",
      watched: ""
    }
  }

  onChangeMovie = (e) => {
     this.setState({movieUpload: {...this.state.movieUpload, [e.target.name] : e.target.value}});
  }

  uploadMovie = (e) => {
    e.preventDefault();
    this.props.addMovie(this.state.movieUpload.title, this.state.movieUpload.watched);
    this.setState( {movieUpload: {...this.state.movieUpload, title: "", watched: ""}})
  }
  render(){
    return (
      <form onSubmit={this.uploadMovie}>
        <div className="form-group">
          <label>Movie Title</label>
          <input type="text" className="form-control"  placeholder="Enter title"
          name="title" value={this.state.movieUpload.title} onChange={this.onChangeMovie}/>
        </div>
        <div className="form-group">
          <label>Date Watched</label>
          <input type="date" className="form-control"
          name="watched" value={this.state.movieUpload.watched} onChange={this.onChangeMovie}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default AddMovie;
