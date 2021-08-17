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
    return (
      <div className="movie">
        <h3>{this.props.title}</h3>
        <p>Number of likes: {this.state.value}</p>
        <button onClick={this.increaseLikes}>Like</button>
      </div>
    );
  }
}

export default Movie;
