import MovieList from "@/app/components/MovieList";
import { mapGenresToMovies } from "@/app/utils/getgenre";
import React from "react";

const MoviePage = async () => {
  const { getAllMovies } = await import("@/lib/data");
  const movies = await getAllMovies();

  return <MovieList movies={movies} />;
};

export default MoviePage;
