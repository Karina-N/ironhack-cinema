import React from "react";
import "./App.css";

function Header() {
  return <h2>Welcome to IronHack Cinema</h2>;
}

function Main() {
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

function Movie(props) {
  return (
    <div className="movie">
      <h5>{props.title}</h5>
    </div>
  );
}

function Footer() {
  return <footer>&copy; 2021 Created with love by team at Ironhack</footer>;
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
