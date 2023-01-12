import { Await, defer, useLoaderData, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

/* 
   Implement MovieDetails component w/o Api call for movie.
   API call is made from loader, in route configuration and exposed 
   via useDataLoader hook. Loader utilizes 'Defer' to support long running
   APIs (unlike v2).
*/

export default function MovieDetailsV3() {
  const data: any = useLoaderData();

  return (
    <div className="flex justify-center">
      <React.Suspense fallback={<p>Loading Movie Data...</p>}>
        <Await
          resolve={data.response}
          errorElement={<p>Error loading movie data</p>}
        >
          {(response) => {
            return (
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
            );
          }}
        </Await>
      </React.Suspense>
    </div>
  );
}

/**
 * Loader to fetch movie by ID, via Fetch API w/ 'defer'
 * @param param
 * @returns
 */
export const MovieDetailsV3Loader = async ({ params }: any) => {
  const { movieId } = params;
  const moviePromise = fetch(
    `https://www.omdbapi.com/?apikey=4a3b711b&i=${movieId}`
  ).then((res) => res.json());
  return defer({ response: moviePromise });
};
