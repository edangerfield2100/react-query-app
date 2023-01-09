import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function MovieDetails() {
  const location = useLocation();

  const movieId = location.state.id;
  const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=4a3b711b&i=${movieId}`;
  console.log(MOVIE_API_URL);

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: [`movie-${movieId}`],
    queryFn: () => axios.get(MOVIE_API_URL).then((res) => res.data),
  });

  return (
    <div>
      {data && (
        <div className="m-8 border-2 w-2/4 flex justify-between">
          <div className="p-4">
            <div>Title: {data["Title"]}</div>
            <div>Year: {data["Year"]}</div>
            <div>Rated: {data["Rated"]}</div>
            <div>Box Office Revenue: {data["BoxOffice"]}</div>
            <div>IMDB ID: {movieId}</div>
            <div>IMDB Rating: {data["imdbRating"]}</div>
          </div>
          <div className="w-52">
            <img alt={`The movie titled: ${data.Title}`} src={data.Poster} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
