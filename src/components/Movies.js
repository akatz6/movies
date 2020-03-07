import React, {Component} from 'react';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';


class Movies extends Component {

  render(){
    return this.props.movies.map((movie) =>(
        <MovieItem key={movie.id} movie={movie}/>
    ))
  }
}
Movies.propTypes = {
    movies: PropTypes.array.isRequired
}

export default Movies;
