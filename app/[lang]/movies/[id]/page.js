import MovieDetails from "@/app/components/MovieDetails";

const MovieDetailsPage = async ({ params: { id } }) => {
  return <MovieDetails id={id} />;
};

export default MovieDetailsPage;
