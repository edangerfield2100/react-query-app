import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/* 
   Implement MovieDetails component w/o Api call for movie, in component.
   API call is made from loader (via React Query), in route configuration 
   and retrieved from the React Query cache via useQuery.
*/

const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=4a3b711b&i=`;

function MovieDetailsV4() {
  const { movieId } = useParams();
  const { data, isFetching } = useQuery(movieDetailsQuery(movieId));

  return (
    <div className="flex justify-center">
      {/* {isFetching && <div>Fetching movie data...</div>} */}
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

export default MovieDetailsV4;

// define query
const movieDetailsQuery = (movieId: any) => ({
  queryKey: [`movie-${movieId}`],
  queryFn: () => axios.get(MOVIE_API_URL + movieId).then((res) => res.data),
});

export const MovieDetailsV4Loader =
  (queryClient: any) =>
  async ({ params }: { params: any }) => {
    const query = movieDetailsQuery(params.movieId);
    // return data from cache (if available), otherwise fetch to populate cache
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };
