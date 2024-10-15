import MovieList from "@/app/components/MovieList";
import { mapGenresToMovies } from "@/app/utils/getgenre";
import { notFound } from "next/navigation";
import React from "react";

const TrendingPage = async () => {
  const { getTrendingMovies } = await import("@/lib/data");
  const trendingMovies = await getTrendingMovies();

  if (!trendingMovies) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-5xl mb-10 font-bold">Trending Now</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default TrendingPage;
