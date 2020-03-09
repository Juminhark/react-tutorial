import React, { Component } from 'react'
import axios from 'axios';
import Movie from './Movie';

export default class MovieList extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { 
      data: { 
        data: { movies }
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
   console.log(movies);
   this.setState({ movies, isLoading: false });
   console.log('state의 movies에 axios가 fetch data를 연결.');
   }

  componentDidMount(){
    this.getMovies();
  }
  
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        <h3>data fetch using axios - async / await</h3>
        <section className='container'>
          {isLoading 
            ? (
              <div className='loader'>
                <span className='loader__text'>Loading</span>
              </div>
            ) : (
              <div className='movies'>
                {movies.map(movie => (
                  <Movie 
                    key={movie.id}
                    id={movie.id} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                ))}
              </div>
            )}
        </section>
      </div>
    );
  }
}
