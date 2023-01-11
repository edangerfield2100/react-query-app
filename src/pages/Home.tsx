import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Movie, { MovieInterface } from "../components/movie";

function Home() {
  const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

  const { error, data, isFetching } = useQuery({
    queryKey: ["movies"],
    queryFn: () => axios.get(MOVIE_API_URL).then((res) => res.data),
  });

  let navigate = useNavigate();

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
    <div>
      <div className="sm:flex sm:justify-around">
        {filteredResults.map((movie: MovieInterface, index: number) => {
          return <Movie key={`${index}`} movie={movie} />;
        })}
      </div>
      <div className="mt-12 flex justify-center">
        <button
          className="w-32 m-2 btn border-2 border-purple-800 mr-4 text-center hover:bg-purple-800 hover:text-white"
          onClick={() => {
            navigate("/search");
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Home;
