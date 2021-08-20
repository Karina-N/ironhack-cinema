import React from "react";
import Movie from "./Movie";
import AddMovie from "./AddMovie";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // moviesArr: movies,
      searchNameTwo: "",
    };
  }

  renderMovies = () => {
    const { searchNameTwo } = this.state;
    const filteredMovies = this.props.listOfMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchNameTwo.toLowerCase())
    );

    return filteredMovies.map((movieObj) => {
      /* return <Movie key={movieObj.id} title={movieObj.title} year={movieObj.year} imgURL={movieObj.imgURL} rating={movieObj.rating} />; */
      return <Movie key={movieObj.id} {...movieObj} methodToDeleteMovie={this.props.methodToDeleteMovie} />;
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

  filterMovies = (filterData) => {
    console.log(filterData.filterValue);
    this.setState((prevState) => {
      if (filterData.filterValue === "Title A-Z") {
        return {
          moviesArr: prevState.moviesArr.sort((a, b) => (a.title > b.title ? 1 : -1)),
        };
      } else if (filterData.filterValue === "Title Z-A") {
        return {
          moviesArr: prevState.moviesArr.sort((a, b) => (a.title > b.title ? -1 : 1)),
        };
      } else if (filterData.filterValue === "Rating Desc") {
        return {
          moviesArr: prevState.moviesArr.sort((a, b) => (a.rating > b.rating ? -1 : 1)),
        };
      } else if (filterData.filterValue === "Rating Asc") {
        return {
          moviesArr: prevState.moviesArr.sort((a, b) => (a.rating > b.rating ? 1 : -1)),
        };
      }
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
    //this.setState({ moviesArr: movies });
  };

  render() {
    return (
      <main>
        {/* here through props i'm passing info from parent element(main) to child element(addMovie) */}
        <AddMovie methodToCreateMovie={this.props.methodToCreateMovie} />
        <div className="header-buttons">
          <button className="sort" onClick={this.methodToSortMovieByTitle}>
            Sort By Title
          </button>
          <button className="sort" onClick={this.methodToSortMovieByRating}>
            Sort By Rating
          </button>
          <Filter addFilterHandler={this.filterMovies} />
          <SearchBar
            addSearchHandler={this.searchMovie}
            handleSearchInputTwo={(e) => this.setState({ searchNameTwo: e.target.value })}
          />
          <button onClick={this.methodToClearSearch}>Clear Search</button>
        </div>

        <section className="movieList">
          {this.props.listOfMovies.length ? this.renderMovies() : <h2>You have no movies in your list! :(</h2>}
        </section>
      </main>
    );
  }
}

export default Main;
