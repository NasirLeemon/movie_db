import MovieList from "@/app/components/MovieList";
import { notFound } from "next/navigation";
import React from "react";

const NewReleasePage = async () => {
  const { getNewReleaseMovies } = await import("@/lib/data");
  const newReleasedMovies = await getNewReleaseMovies();
  if (!newReleasedMovies) {
    notFound();
  }
  return <MovieList movies={newReleasedMovies} />;
};

export default NewReleasePage;
