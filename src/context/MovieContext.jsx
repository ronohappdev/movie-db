import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const MovieContext = createContext();

const API_KEY = '44a627e9'; // OMDb API Key

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (searchValue) => {
    if (!searchValue || searchValue.trim() === '') {
      setMovies(null);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`
      );
      const data = response.data;

      if (data.Response === "False") {
        // API returned error (e.g., "Movie not found!")
        setMovies(null);
        setError(data.Error || "No movies found. Try a different search.");
      } else {
        setMovies(data.Search);
        setError(null);
      }
    } catch (err) {
      // Network error or other issues
      console.error("Error fetching movies:", err);
      setMovies(null);
      setError("Failed to fetch movies. Please check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const removeFavoriteMovie = (movie) => {
    movie.isFavorite = false;
    const newFavoriteList = favorites.filter(
      (fav) => fav.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
    // Persist to localStorage
    localStorage.setItem('movieFavorites', JSON.stringify(newFavoriteList));
  };

  const addFavoriteMovie = (movie) => {
    movie.isFavorite = true;
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    // Persist to localStorage
    localStorage.setItem('movieFavorites', JSON.stringify(newFavoriteList));
  };

  const favoriteHandler = (movie, e) => {
    e.preventDefault();
    if (favorites.includes(movie)) {
      removeFavoriteMovie(movie);
    } else {
      addFavoriteMovie(movie);
    }
  };

  const showDetail = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
      );
      const data = response.data;

      if (data.Response === "False") {
        setError(data.Error || "Movie details not found.");
        setSelectedMovie({});
      } else {
        setSelectedMovie(data);
        setError(null);
      }
    } catch (err) {
      console.error("Error fetching movie details:", err);
      setError("Failed to load movie details. Please try again.");
      setSelectedMovie({});
    } finally {
      setLoading(false);
    }
  };

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem('movieFavorites');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (err) {
      console.error("Error loading favorites from localStorage:", err);
    }
  }, []);

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  return (
    <MovieContext.Provider
      value={{
        setSearch,
        movies,
        favorites,
        favoriteHandler,
        showDetail,
        selectedMovie,
        loading,
        error,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;