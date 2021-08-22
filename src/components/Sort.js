import React from "react";

class Sort extends React.Component {
  handleSortInput = (e) => {
    this.setState({
      sortInput: e.target.value,
    });
  };

  handleSortSubmit = (e) => {
    e.preventDefault();
    this.props.methodToSortMovies(this.state);
  };

  render() {
    return (
      <form className="sort" onSubmit={this.handleSortSubmit}>
        <select value={this.props.sortInput} onChange={(e) => this.handleSortInput(e)}>
          <option></option>
          <option name="Title A-Z">Title A-Z</option>
          <option name="Title Z-A">Title Z-A</option>
          <option name="Rating Desc">Rating Desc</option>
          <option name="Rating Asc">Rating Asc</option>
        </select>
        <button className="form-button">Sort</button>
      </form>
    );
  }
}

export default Sort;
