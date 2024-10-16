import MovieList from "@/app/components/MovieList";
import { mapGenresToMovies } from "@/app/utils/getgenre";
import React from "react";

const MoviePage = async () => {
  const { getAllMovies } = await import("@/lib/data");
  const movies = await getAllMovies();

  return (
    <div>
      <h1 className="text-5xl mb-5">All Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviePage;
