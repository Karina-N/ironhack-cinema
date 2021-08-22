import React from "react";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Summary from "../Summary";
import movies from "../../data/movies.json";
import "./App.css";

class App extends React.Component {
  state = {
    moviesArr: movies,
  };

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

  searchMovie = (searchData) => {
    this.setState((prevState) => {
      return {
        moviesArr: prevState.moviesArr.filter((movie) =>
          movie.title.toLowerCase().includes(searchData.searchInputOne.toLowerCase())
        ),
      };
    });
  };

  clearSearch = () => {
    this.setState({ moviesArr: movies });
  };

  sortMovies = (sortData) => {
    this.setState((prevState) => {
      if (sortData.sortInput === "Title A-Z") {
        return {
          moviesArr: prevState.moviesArr.sort((a, b) => (a.title > b.title ? 1 : -1)),
        };
      } else if (sortData.sortInput === "Title Z-A") {
        return {
          moviesArr: prevState.moviesArr.sort((a, b) => (a.title > b.title ? -1 : 1)),
        };
      } else if (sortData.sortInput === "Rating Desc") {
        return {
          moviesArr: prevState.moviesArr.sort((a, b) => (a.rating > b.rating ? -1 : 1)),
        };
      } else if (sortData.sortInput === "Rating Asc") {
        return {
          moviesArr: prevState.moviesArr.sort((a, b) => (a.rating > b.rating ? 1 : -1)),
        };
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Summary listOfMovies={this.state.moviesArr} />
        <Main
          listOfMovies={this.state.moviesArr}
          methodToDeleteMovie={this.deleteMovie}
          methodToCreateMovie={this.createMovie}
          methodToClearSearch={this.clearSearch}
          methodToSearchMovie={this.searchMovie}
          methodToSortMovies={this.sortMovies}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
