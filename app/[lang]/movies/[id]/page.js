import MovieDetails from "@/app/components/MovieDetails";

const MovieDetailsPage = async ({ params: { id } }) => {
  console.log(id);
  return <MovieDetails id={id} />;
};

export default MovieDetailsPage;
