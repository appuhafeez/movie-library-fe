import React from "react";
import Nav from "../Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../util/request";
import "./../App.css";

function Home() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        mediaType="tv"
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        mediaType="movie"
      />
      <Row
        title="Action movies"
        fetchUrl={requests.fetchActionMovies}
        mediaType="movie"
      />
      <Row
        title="Comedy Now"
        fetchUrl={requests.fetchComedyMovies}
        mediaType="movie"
      />
      <Row
        title="Horror movies"
        fetchUrl={requests.fetchHorrorMovies}
        mediaType="movie"
      />
      <Row
        title="Romance movies"
        fetchUrl={requests.fetchRomanceMovies}
        mediaType="movie"
      />
      <Row
        title="Documentries"
        fetchUrl={requests.fetchDocumentaries}
        mediaType="movie"
      />
    </div>
  );
}

export default Home;
