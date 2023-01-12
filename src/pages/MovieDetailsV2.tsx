import { useLoaderData, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/* 
   Implement MovieDetails component w/o Api call for movie.
   API call is made from loader, in route configuration and exposed 
   via useDataLoader hook.
*/

export default function MovieDetailsV2() {
  const movie: any = useLoaderData();

  return (
    <div className="flex justify-center">
      {movie && (
        <div className="m-8 border-2 flex justify-between sm:w-2/3 shadow-xl">
          <div className="p-4">
            <div>Title: {movie["Title"]}</div>
            <div>Year: {movie["Year"]}</div>
            <div>Rated: {movie["Rated"]}</div>
            <div>Box Office Revenue: {movie["BoxOffice"]}</div>
            <div>IMDB ID: {movie["imdbID"]}</div>
            <div>IMDB Rating: {movie["imdbRating"]}</div>
          </div>
          <div className="w-52">
            <img alt={`The movie titled: ${movie.Title}`} src={movie.Poster} />
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Loader to fetch movie by ID, via Fetch API
 * @param param
 * @returns
 */
export const MovieDetailsV2Loader = async ({ params }: any) => {
  const { movieId } = params;
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=4a3b711b&i=${movieId}`
  );
  return res.json();
};
