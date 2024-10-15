import MovieList from "@/app/components/MovieList";
import React from "react";

const CommingSoonPage = async () => {
  const { getUpcomingMovies } = await import("@/lib/data");
  const upcomingMovies = await getUpcomingMovies();
  return (
    <div>
      <div className="text-5xl mb-5">Comming Soon </div>
      <MovieList movies={upcomingMovies} />
    </div>
  );
};

export default CommingSoonPage;
