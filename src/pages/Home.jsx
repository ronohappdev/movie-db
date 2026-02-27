import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Input from "../components/Input";
import { MovieContext } from "../context/MovieContext";
import Card from "../components/Card";
import "../styles/Home.css";

const Home = () => {
  const { setSearch, movies, favoriteHandler, loading, error } = useContext(MovieContext);
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home-container">
      <Input handleSearch={handleSearch} />
      
      {/* Loading State */}
      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading movies...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="error-state">
          <p className="error-message">⚠️ {error}</p>
        </div>
      )}

      {/* Movies List */}
      {!loading && !error && movies?.length > 0 && (
        <div className="movies">
          {movies.map((movie) => {
            return (
              <Link
                to={`movies/${movie.imdbID}`}
                className="text-link"
                key={movie.imdbID}
              >
                <Card
                  key={movie.imdbID}
                  image={movie.Poster}
                  title={movie.Title}
                  year={movie.Year}
                  addFavorite={(e) => favoriteHandler(movie, e)}
                  isFavorite={movie.isFavorite}
                />
              </Link>
            );
          })}
        </div>
      )}

      {/* Empty State (No search yet or no results) */}
      {!loading && !error && !movies && (
        <div className="search-warning">
          <p>Search a movie!</p>
          <p>i.e. Harry Potter</p>
        </div>
      )}
    </div>
  );
};

export default Home;