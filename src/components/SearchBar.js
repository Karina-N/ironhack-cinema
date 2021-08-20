import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
    };
  }

  handleSearchInput = (event) => {
    this.setState({
      searchName: event.target.value,
    });
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.addSearchHandler(this.state);
    this.setState({ searchName: "" });
  };

  render() {
    return (
      <>
        <form className="search-form" onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            name="searchName"
            value={this.state.searchName}
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
