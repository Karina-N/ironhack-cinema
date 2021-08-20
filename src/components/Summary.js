import React from "react";

class Summary extends React.Component {
  averageRating =
    this.props.listOfMovies.reduce((acc, currentElm) => {
      return acc + currentElm.rating;
    }, 0) / this.props.listOfMovies.length;

  render() {
    return (
      <>
        <h3>Number of movies: {this.props.listOfMovies.length}</h3>
        <h3>Average rating: {this.averageRating}</h3>
      </>
    );
  }
}

export default Summary;
