import { render } from "@testing-library/react";
import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: "",
    };
  }
  handleFilterInput = (e) => {
    this.setState({
      filterValue: e.target.value,
    });
  };

  handleFilterSubmit = (e) => {
    e.preventDefault();
    this.props.addFilterHandler(this.state);
  };

  render() {
    return (
      <form className="sort" onSubmit={this.handleFilterSubmit}>
        <select value={this.state.value} onChange={(e) => this.handleFilterInput(e)}>
          <option></option>
          <option name="Title A-Z">Title A-Z</option>
          <option name="Title Z-A">Title Z-A</option>
          <option name="Rating Desc">Rating Desc</option>
          <option name="Rating Asc">Rating Asc</option>
        </select>
        <button className="form-button">Filter</button>
      </form>
    );
  }
}

export default Filter;
