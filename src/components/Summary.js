import React from "react";

// class Summary extends React.Component {
//   render() {
//     const averageRating =
//       this.props.listOfMovies.reduce((acc, currentElm) => {
//         return acc + currentElm.rating;
//       }, 0) / this.props.listOfMovies.length;

//     return (
//       <>
//         <h3>Number of movies: {this.props.listOfMovies.length}</h3>
//         <h3>Average rating: {averageRating}</h3>
//       </>
//     );
//   }
// }

class Summary extends React.Component {
  getAverageRating() {
    return (
      this.props.listOfMovies.reduce((acc, currentElm) => {
        return acc + currentElm.rating;
      }, 0) / this.props.listOfMovies.length
    ).toFixed(2);
  }

  render() {
    return (
      <>
        <h3>Number of movies: {this.props.listOfMovies.length}</h3>
        <h3>Average rating: {this.getAverageRating()}</h3>
      </>
    );
  }
}

export default Summary;
