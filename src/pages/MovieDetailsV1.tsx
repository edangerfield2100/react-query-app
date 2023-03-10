import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/*
  Implement MovieDetails component w/ API call for movie,
  invoked in component, via React Query.
*/

function MovieDetailsV1() {
  const { movieId } = useParams();
  const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=4a3b711b&i=${movieId}`;

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: [`movie-${movieId}`],
    queryFn: () => axios.get(MOVIE_API_URL).then((res) => res.data),
  });

  return (
    <div className="flex justify-center">
      {data && (
        <div className="m-8 border-2 flex justify-between sm:w-2/3 shadow-xl">
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

export default MovieDetailsV1;
