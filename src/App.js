import React, {Component} from 'react';
import AddMovie from './components/AddMovie'
import Users from './components/Users'
import Movies from './components/Movies'
import {v4 as uuid} from 'uuid'
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    users: {
      username: "",
    },
    movies:[
    ]
  }

  componentDidMount(){
    this.getUser();
  }

  getUser()  {
    axios.get("https://anapioficeandfire.com/api/characters/583")
      .then(res =>{
        const newUser ={
          username:res.data.name
        }
        this.setState({
          users:  newUser.username
        })
      }).catch((err) => {});
  }

  getUserFavoritMovie = (username) => {
    this.refs.btn.setAttribute("disabled", "disabled");
    let getUsersMovies =  new Promise((resolve, reject) => {
       const movie = {
        id: uuid,
        title: "Jaws",
        watched: "2020-01-10",
        username: "Jon Snow"
      }
      this.setState({movies: [...this.state.movies, movie]});
    });
    getUsersMovies.then((successMessage)=> {
      console.log("Yay! " + successMessage)
    })
    getUsersMovies.catch(error => {
      console.log(error)
    });
  }

  addMovie =(title, watched) => {
    const newMovie ={
      id: uuid,
      title,
      watched,
      username: this.state.users.toString()
    }
    this.setState({movies: [...this.state.movies, newMovie]});
  }

  render(){
    return (
      <div className="App">
        <div className="App-header">
          <Users users={this.state.users}/>
        </div>
        <button type="button" className="btn btn-success btn-lg get-button"
        onClick={() => this.getUserFavoritMovie(this.state.users.toString())}
        ref="btn">
        Get favorite movies</button>
        <div className="App-body">
          <Movies movies={this.state.movies}/>
          <AddMovie addMovie={this.addMovie}/>
        </div>
      </div>
    );
  }
}

export default App;
