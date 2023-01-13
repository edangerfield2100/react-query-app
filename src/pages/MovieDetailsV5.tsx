import React from "react";
import { Await, defer, useLoaderData, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

/* 
   Implement MovieDetails component w/o Api call for movie, in component.
   API call is made from loader (via React Query), in route configuration 
   and exposed via the useLoaderData hook.
*/

const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=4a3b711b&i=`;

function MovieDetailsV5() {
  const { movieId } = useParams();
  const movieData: any = useLoaderData();

  // required to create observer in QueryCache
  const { data } = useQuery(movieDetailsQuery(movieId));

  return (
    <div className="flex justify-center">
      {/* {isFetching && <div>Fetching movie data...</div>} */}
      <React.Suspense fallback={<p>Loading Movie Data...</p>}>
        <Await
          resolve={movieData.response}
          errorElement={<p>Error loading movie data</p>}
        >
          {(response) => {
            return (
              response && (
                <div className="m-8 border-2 flex justify-between sm:w-2/3 shadow-xl">
                  <div className="p-4">
                    <div>Title: {response["Title"]}</div>
                    <div>Year: {response["Year"]}</div>
                    <div>Rated: {response["Rated"]}</div>
                    <div>Box Office Revenue: {response["BoxOffice"]}</div>
                    <div>IMDB ID: {response["imdbID"]}</div>
                    <div>IMDB Rating: {response["imdbRating"]}</div>
                  </div>
                  <div className="w-52">
                    <img
                      alt={`The movie titled: ${response.Title}`}
                      src={response.Poster}
                    />
                  </div>
                </div>
              )
            );
          }}
        </Await>
      </React.Suspense>
    </div>
  );
}

export default MovieDetailsV5;

// define query
const movieDetailsQuery = (movieId: any) => ({
  queryKey: [`movie-${movieId}`],
  queryFn: () => axios.get(MOVIE_API_URL + movieId).then((res) => res.data),
});

export const MovieDetailsV5Loader =
  (queryClient: any) =>
  async ({ params }: { params: any }) => {
    const query = movieDetailsQuery(params.movieId);

    // return data from cache (if available), otherwise fetch.
    const data = queryClient.getQueryData(query.queryKey, {
      stale: false,
    });
    if (data) {
      return { response: Promise.resolve(data) };
    } else {
      const moviePromise = queryClient.fetchQuery(query);
      return defer({ response: moviePromise });
    }
  };
