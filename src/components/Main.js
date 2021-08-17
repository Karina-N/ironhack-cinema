import React from "react";
import Movie from "./Movie";

class Main extends React.Component {
  render() {
    return (
      <main className="movieList">
        <Movie title="The Motorcycle Diaries" />
        <Movie title="An Education" />
        <Movie title="Green Mile" />
        <Movie title="Inception" />
        <Movie title="Butterfly Effect" />
        <Movie title="The Matrix" />
      </main>
    );
  }
}

export default Main;
