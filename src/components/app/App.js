import React from "react";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Summary from "../Summary";
import movies from "../../data/movies.json";
import "./App.css";

class App extends React.Component {
  state = {
    moviesArr: movies,
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Summary listOfMovies={this.state.moviesArr} />
        <Main listOfMovies={this.state.moviesArr} />
        <Footer />
      </div>
    );
  }
}

export default App;
