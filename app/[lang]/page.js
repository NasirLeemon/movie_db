import MovieList from "../components/MovieList";
import { getDictionary } from "./dictionaries";

export default async function Home() {
  const { getAllMovies } = await import("@/lib/data");
  const movies = getAllMovies();

  return <MovieList movies={movies} />;
}
