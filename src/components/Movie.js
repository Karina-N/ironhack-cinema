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

  // BANNER OPTION 3
  // renderBanner = () => {
  //   return this.props.rating > 8 ? <p className="banner">POPULAR</p> : "";
  // };

  render() {
    // STYLING OPTION 1
    // let classList = this.state.value >= 5 ? " movie-popular" : "";

    // STYLING OPTION 2
    // if (this.state.value >= 5) {
    //   classList += " movie-popular";
    // }

    const styleObj = {
      color: "grey",
      backgroundColor: this.state.value > 4 ? "yellowgreen" : "white",
    };

    // BANNER OPTION 2
    // const popularBanner = this.props.rating > 8 ? <p className="banner">POPULAR</p> : "";

    // BANNER OPTION 1
    // let popularBanner;
    // if (this.props.rating > 8) {
    //   popularBanner = <p className="banner">POPULAR</p>;
    // } else {
    //   popularBanner = "";
    // }

    return (
      // <div className={"movie " + classList}>
      <div className="movie" style={styleObj}>
        <h3>{this.props.title}</h3>
        <img src={this.props.imgURL} alt={this.props.title + " poster"} />

        {/* BANNER OPTION 5 */}
        {this.props.rating > 7 ? <p className="banner">POPULAR</p> : <p className="banner average">AVERAGE</p>}

        {/* BANNER OPTION 4 */}
        {/* {this.props.rating > 7 && <p className="banner">POPULAR</p>} */}

        {/* BANNER OPTION 3 */}
        {/* {this.renderBanner()} */}

        {/* BANNER OPTION 1&2 */}
        {/* {popularBanner} */}

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
