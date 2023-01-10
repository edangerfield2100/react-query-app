import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Movie, { MovieInterface } from "../components/movie";

function Home() {
  const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["movies"],
    queryFn: () => axios.get(MOVIE_API_URL).then((res) => res.data),
  });

  if (isFetching) return <div className="m-8 text-center">Fetch data...</div>;

  if (error) return <div>An error has occurred</div>;

  // filter to first three
  const filteredResults = data["Search"].filter(
    (movie: MovieInterface, index: number) => {
      if (index < 3) return movie;
      else return;
    }
  );

  // sort by year
  filteredResults.sort(
    (a: MovieInterface, b: MovieInterface) => a.Year - b.Year
  );

  return (
    <div className="sm:flex sm:justify-around">
      {filteredResults.map((movie: MovieInterface, index: number) => {
        return <Movie key={`${index}`} movie={movie} />;
      })}
    </div>
  );
}

export default Home;
