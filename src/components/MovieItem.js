import React, {Component} from 'react';
import PropTypes from 'prop-types';


class MovieItem extends Component {

  render(){
    return (
      <div className="alert alert-primary">
        <p>Title: {this.props.movie.title}</p>
        <p>Date Watched: {this.props.movie.watched}</p>
      </div>
    )
  }
}

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired
}

export default MovieItem;
