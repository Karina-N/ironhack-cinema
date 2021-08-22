import React from "react";
import Movie from "./Movie";
import AddMovie from "./AddMovie";
import SearchBar from "./SearchBar";
import Filter from "./Sort";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortInput: "",
      searchInputTwo: "",
    };
  }

  renderMovies = () => {
    const { searchInputTwo } = this.state;
    const filteredMovies = this.props.listOfMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchInputTwo.toLowerCase())
    );

    return filteredMovies.map((movieObj) => {
      /* return <Movie key={movieObj.id} title={movieObj.title} year={movieObj.year} imgURL={movieObj.imgURL} rating={movieObj.rating} />; */
      return <Movie key={movieObj.id} {...movieObj} methodToDeleteMovie={this.props.methodToDeleteMovie} />;
    });
  };

  render() {
    return (
      <main>
        {/* here through props i'm passing info from parent element(main) to child element(addMovie) */}
        <AddMovie methodToCreateMovie={this.props.methodToCreateMovie} />
        <div className="header-buttons">
          <Filter methodToSortMovies={this.props.methodToSortMovies} />
          <SearchBar
            methodToSearchMovie={this.props.methodToSearchMovie}
            handleSearchInputTwo={(e) => this.setState({ searchInputTwo: e.target.value })}
          />
          <button onClick={this.props.methodToClearSearch}>Clear Search</button>
        </div>

        <section className="movieList">
          {this.props.listOfMovies.length ? this.renderMovies() : <h2>You have no movies in your list! :(</h2>}
        </section>
      </main>
    );
  }
}

export default Main;
