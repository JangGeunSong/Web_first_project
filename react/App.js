import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const MovieTitles = [
  "First Man",
  "Jurassic Park",
  "The Dark Knight",
  "Avengers"
];

const MovieImages = [
  "https://i.etsystatic.com/10683147/r/il/aea8ba/1609378563/il_570xN.1609378563_f8r5.jpg",
  "http://www.jurassicworld.com/sites/default/files/2016-08/jp_cover.jpg",
  "https://is2-ssl.mzstatic.com/image/thumb/Video118/v4/3e/54/c8/3e54c80d-7d7d-5786-0ac9-aca4bafadfda/contsched.jsirdfmq.lsr/268x0w.jpg",
  "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={MovieTitles[0]} poster={MovieImages[0]} />
        <Movie title={MovieTitles[1]} poster={MovieImages[1]} />
        <Movie title={MovieTitles[2]} poster={MovieImages[2]} />
        <Movie title={MovieTitles[3]} poster={MovieImages[3]} />
      </div>
    );
  }
}

export default App;
