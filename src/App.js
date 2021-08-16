import React from "react";
import "./App.css";

class Header extends React.Component {
  render() {
    return <h2>Welcome to IronHack Cinema</h2>;
  }
}

class Main extends React.Component {
  render() {
    return (
      <main>
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

class Movie extends React.Component {
  render() {
    return (
      <div className="movie">
        <h5>{this.props.title}</h5>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return <footer>&copy; 2021 Created with love by team at Ironhack</footer>;
  }
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
