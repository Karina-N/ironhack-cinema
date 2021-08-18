import React from "react";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  increaseLikes = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  render() {
    // OPTION 1
    // let classList = this.state.value >= 5 ? " movie-popular" : "";

    // OPTION 2
    // if (this.state.value >= 5) {
    //   classList += " movie-popular";
    // }

    const styleObj = {
      color: "grey",
      backgroundColor: this.state.value > 4 ? "yellowgreen" : "white",
    };

    return (
      // <div className={"movie " + classList}>
      <div className="movie" style={styleObj}>
        <h3>{this.props.title}</h3>
        <img src={this.props.imgURL} alt={this.props.title + " poster"} />
        <p>{this.props.year}</p>
        <p>Rating: {this.props.rating}</p>
        <p>Genres: {this.props.genres}</p>
        <p>
          Number of likes: {this.state.value + " "}
          <button onClick={this.increaseLikes}>+1</button>
        </p>
        <button onClick={this.props.methodToDeleteMovie}>Delete</button>
      </div>
    );
  }
}

export default Movie;
