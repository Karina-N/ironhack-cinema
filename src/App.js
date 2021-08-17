import React from "react";
import "./App.css";

class Header extends React.Component {
  render() {
    return <h1>Welcome to IronHack Cinema</h1>;
  }
}

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
