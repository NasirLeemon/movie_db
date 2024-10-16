import Modal from "@/app/components/Modal";
import MovieDetails from "@/app/components/MovieDetails";

const MovieModal = ({ params: { id } }) => {
  return (
    <Modal>
      <MovieDetails id={id} />
    </Modal>
  );
};

export default MovieModal;
