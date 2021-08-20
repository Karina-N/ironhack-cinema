import React from "react";
import movies from "../data/movies.json";
import Movie from "./Movie";
import AddMovie from "./AddMovie";
import SearchBar from "./SearchBar";

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

  // FILTER

  methodToSortMovieByTitle = () => {
    this.setState((prevState) => {
      return {
        moviesArr: prevState.moviesArr.sort((a, b) => (a.title > b.title ? 1 : -1)),
      };
    });
  };

  methodToSortMovieByRating = () => {
    this.setState((prevState) => {
      return {
        moviesArr: prevState.moviesArr.sort((a, b) => (a.rating > b.rating ? -1 : 1)),
      };
    });
  };

  // CREATE MOVIE
  createMovie = (movieData) => {
    this.setState((prevState) => {
      return { moviesArr: [...prevState.moviesArr, movieData] };
    });
  };

  // SEARCH
  searchMovie = (searchData) => {
    this.setState((prevState) => {
      return {
        moviesArr: prevState.moviesArr.filter((movie) =>
          movie.title.toLowerCase().includes(searchData.searchName.toLowerCase())
        ),
      };
    });
  };

  methodToClearSearch = () => {
    this.setState({ moviesArr: movies });
  };

  render() {
    return (
      <main>
        {/* here through props i'm passing info from parent element(main) to child element(addMovie) */}
        <AddMovie addMovieHandler={this.createMovie} />
        <div className="header-buttons">
          <button onClick={this.methodToSortMovieByTitle}>Sort By Title</button>
          <button onClick={this.methodToSortMovieByRating}>Sort By Rating</button>

          <SearchBar addSearchHandler={this.searchMovie} />
          <button onClick={this.methodToClearSearch}>Clear Search</button>
        </div>

        <section className="movieList">
          {this.state.moviesArr.length ? this.renderMovies() : <h2>You have no movies in your list! :(</h2>}
        </section>
      </main>
    );
  }
}

export default Main;
