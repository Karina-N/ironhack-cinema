import React, { Component } from "react";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: "",
      rating: "",
      imgURL: "",
    };
  }

  // HERE WE CAN DO INDIVIDUAL EVENT HANDLER FOR EACH INPUT
  //   handleTitleChange = (e) => {
  //     this.setState({
  //       title: e.target.value,
  //     });
  //   };

  // EVENT HANDLER FOR ALL INPUTS
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault(); // we tell browser not to refresh when we submit form
    this.props.addMovieHandler(this.state); // here we pass new movie info from child to parent component
    this.setState({ title: "", year: "", rating: "", imgURL: "" });
  };

  render() {
    return (
      <div className="header-right">
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleInputChange(e)} />
          </label>
          <label>
            Year:
            <input
              type="number"
              min="1900"
              max="2099"
              name="year"
              value={this.state.year}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Rating:
            <input
              type="number"
              min="1"
              max="10"
              name="rating"
              value={this.state.rating}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Image URL:
            <input type="text" name="imgURL" value={this.state.imgURL} onChange={(e) => this.handleInputChange(e)} />
          </label>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
