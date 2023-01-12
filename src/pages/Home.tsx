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
      {/* <div>
        <h4 className="mt-4 ml-4">
          Example: Fetch API request in route loader
        </h4>
        <div className="sm:flex sm:justify-around">
          {filteredResults.map((movie: MovieInterface, index: number) => {
            return (
              <Movie
                key={`${index}`}
                movie={movie}
                routeName="movie-details-v2"
              />
            );
          })}
        </div>
      </div> */}
      {/* <div>
        <h4 className="mt-4 ml-4">
          Example: Fetch API request in route loader, utilizing 'defer'
        </h4>
        <div className="sm:flex sm:justify-around">
          {filteredResults.map((movie: MovieInterface, index: number) => {
            return (
              <Movie
                key={`${index}`}
                movie={movie}
                routeName="movie-details-v3"
              />
            );
          })}
        </div>
      </div> */}
      {/* <div className="mt-12 flex justify-center">
        <button
          className="w-32 m-2 btn border-2 border-purple-800 mr-4 text-center hover:bg-purple-800 hover:text-white"
          onClick={() => {
            navigate("/search");
          }}
        >
          Search
        </button>
      </div> */}
      <div className="m-4 accordion" id="accordionExample">
        <div className="pb-5 accordion-item bg-white border border-gray-400">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Example: Fetch API request in route loader
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div>
              <div className="sm:flex sm:justify-around">
                {filteredResults.map((movie: MovieInterface, index: number) => {
                  return (
                    <Movie
                      key={`${index}`}
                      movie={movie}
                      routeName="movie-details-v2"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5 accordion-item bg-white border border-gray-400">
          <h2 className="accordion-header mb-0" id="headingTwo">
            <button
              className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Example: Fetch API request in route loader, utilizing 'defer'
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div>
              <div className="sm:flex sm:justify-around">
                {filteredResults.map((movie: MovieInterface, index: number) => {
                  return (
                    <Movie
                      key={`${index}`}
                      movie={movie}
                      routeName="movie-details-v3"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5 accordion-item bg-white border border-gray-400">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Example: Nest React Query API request in MovieDetails component
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div>
              <div className="sm:flex sm:justify-around">
                {filteredResults.map((movie: MovieInterface, index: number) => {
                  return (
                    <Movie
                      key={`${index}`}
                      movie={movie}
                      routeName="movie-details-v1"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
