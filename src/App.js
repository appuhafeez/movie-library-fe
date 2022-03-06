import "./App.css";
import Home from "./home-screen/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "@testing-library/react";
import Movie from "./movies-screen/Movie";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/:movieId" element={[<Movie type="movie" />]}></Route>
      <Route path="/tv/:movieId" element={[<Movie type="tv" />]}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

function App() {
  render();
  return <div className="app"></div>;
}

export default App;
