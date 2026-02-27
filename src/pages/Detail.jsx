import React, { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { MovieContext } from "../context/MovieContext";

import noImage from "../utils/no-image-available.png";
import "../styles/Detail.css";

const Detail = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { showDetail, selectedMovie, loading, error } = useContext(MovieContext);
  
  useEffect(() => {
    showDetail(id);
  }, [id]);

  // Loading State
  if (loading) {
    return (
      <div className="detail-container">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading movie details...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="detail-container">
        <div className="error-state">
          <p className="error-message">⚠️ {error}</p>
          <button onClick={() => navigate(-1)} className="back-button">
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  // Empty State (no movie data)
  if (!selectedMovie || !selectedMovie.Title) {
    return (
      <div className="detail-container">
        <div className="search-warning">
          <p>No movie details available</p>
          <button onClick={() => navigate(-1)} className="back-button">
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  // Movie Details Display
  return (
    <div className="detail-container">
      <div className="poster">
        {selectedMovie.Poster === "N/A" ? (
          <img src={noImage} alt={selectedMovie.Title} />
        ) : (
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
        )}
      </div>
      <div className="info">
        <div className="field">
          <div className="label">
            <p className="title label-p">{selectedMovie.Title}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            <p className="label-p">{selectedMovie.Plot}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Released: <p className="label-p">{selectedMovie.Released}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Runtime: <p className="label-p">{selectedMovie.Runtime}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Genre: <p className="label-p">{selectedMovie.Genre}</p>
          </div>
        </div>

        {/* Show multiple rating sources if available */}
        <div className="field">
          <div className="label">
            IMDB Rating: <p className="label-p">{selectedMovie.imdbRating}</p>
          </div>
        </div>

        {/* Display Ratings from multiple sources */}
        {selectedMovie.Ratings && selectedMovie.Ratings.length > 0 && (
          <div className="field">
            <div className="label">
              <p className="label-title">Ratings:</p>
              {selectedMovie.Ratings.map((rating, index) => (
                <p key={index} className="label-p">
                  {rating.Source}: {rating.Value}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="field">
          <div className="label">
            Director(s): <p className="label-p">{selectedMovie.Director}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Cast: <p className="label-p">{selectedMovie.Actors}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Writer(s): <p className="label-p">{selectedMovie.Writer}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Language(s): <p className="label-p">{selectedMovie.Language}</p>
          </div>
        </div>

        {/* Back button */}
        <div className="field">
          <button onClick={() => navigate(-1)} className="back-button">
            ← Back to Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;