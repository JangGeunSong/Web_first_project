import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillMount() -> redner() -> compnentDidMount()

  state = {
    // And now we empty state on the web infomation.
  }

  componentDidMount() {
    this._getMovies();
  }
       // It must be same alphabet on the states name Must be!!!
       // This method how instagram and facebook show the new picture and feed on the scrolling the application. That called the infinite scrolling.
  
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie 
      title={movie.title_english}
      poster={movie.medium_cover_image}
      key={movie.id}
      genres={movie.genres}
      synopsis={movie.synopsis}
      />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
      // movies : movies ==> same as upper code
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
    //fetch and .then + .catch use the promise the ajax use method
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}
//_ is use to make differnce to API and my defined functions.
export default App;


/*
setTimeout(() => { // same as [function () {}]
      this.setState({
        greeting : "Hello user!",
        movies: [
          //...this.state.Movies, // If without this, all movie info that exist before has replace the bottom elem
          {
            title: "First Man",
            poster: "https://i.etsystatic.com/10683147/r/il/aea8ba/1609378563/il_570xN.1609378563_f8r5.jpg"
          },
          {
            title: "Jurassic Park",
            poster: "http://www.jurassicworld.com/sites/default/files/2016-08/jp_cover.jpg"
          },
          {
            title: "The Dark Knight",
            poster: "https://is2-ssl.mzstatic.com/image/thumb/Video118/v4/3e/54/c8/3e54c80d-7d7d-5786-0ac9-aca4bafadfda/contsched.jsirdfmq.lsr/268x0w.jpg"
          },
          {
            title: "Avengers",
            poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"
          }
         // If up to this comp then the movie info update to the top
        ]
      })
    }, 5000)
*/
