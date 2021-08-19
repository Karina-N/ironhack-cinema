import React from "react";
import movies from "../data/movies.json";
import Movie from "./Movie";
import AddMovie from "./AddMovie";

class Main extends React.Component {
  state = {
    moviesArr: movies,
  };

  renderMovies = () => {
    return this.state.moviesArr.map((movieObj) => {
      /* return <Movie key={movieObj.id} title={movieObj.title} year={movieObj.year} imgURL={movieObj.imgURL} rating={movieObj.rating} />; */
      return (
        <Movie
          key={movieObj.id}
          {...movieObj}
          methodToDeleteMovie={() => {
            this.deleteMovie(movieObj.id);
          }}
        />
      );
    });
  };

  // DELETE OPTION 2
  // deleteMovie = (movieId) => {
  //   const newMoviesArr = this.state.moviesArr.filter((elm) => elm.id !== movieId);

  //   this.setState({
  //     moviesArr: newMoviesArr,
  //   });
  // };

  // DELETE OPTION 1
  deleteMovie = (movieId) => {
    this.setState((prevState) => {
      return { moviesArr: prevState.moviesArr.filter((elm) => elm.id !== movieId) };
    });
  };

  createMovie = (movieData) => {
    this.setState((prevState) => {
      return { moviesArr: [...prevState.moviesArr, movieData] };
    });
  };

  render() {
    return (
      <main>
        {/* here through props i'm passing info from parent element(main) to child element(addMovie) */}
        <AddMovie addMovieHandler={this.createMovie} />
        <section className="movieList">
          {this.state.moviesArr.length ? this.renderMovies() : <h2>You have no movies in your list! :(</h2>}
        </section>
      </main>
    );
  }
}

export default Main;
