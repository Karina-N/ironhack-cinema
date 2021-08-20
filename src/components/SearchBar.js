import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputOne: "",
    };
  }

  handleSearchInput = (event) => {
    this.setState({
      searchInputOne: event.target.value,
    });
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.addSearchHandler(this.state);
    this.setState({ searchInputOne: "" });
  };

  render() {
    return (
      <>
        <form className="search-form" onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            name="searchInputOne"
            value={this.state.searchInputOne}
            placeholder="search #1"
            onChange={(e) => this.handleSearchInput(e)}
          />
          <button className="form-button">Search Movies</button>
        </form>

        <input type="search" placeholder="Search #2" onChange={this.props.handleSearchInputTwo} />
      </>
    );
  }
}

export default SearchBar;
