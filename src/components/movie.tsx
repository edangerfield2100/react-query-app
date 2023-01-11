import React from "react";
import { useNavigate } from "react-router-dom";

export type MovieInterface = {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
};

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }: { movie: MovieInterface }) => {
  const navigate = useNavigate();

  const mvPoster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="mt-8">
      <h2 className="font-bold text-center">{movie.Title}</h2>
      <div className="flex justify-center cursor-pointer">
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={mvPoster}
          onClick={() => {
            navigate(`/movie-details/${movie.imdbID}`);
          }}
        />
      </div>
      <p className="text-center">({movie.Year})</p>
    </div>
  );
};

export default Movie;
