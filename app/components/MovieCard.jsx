import { BASE_IMAGE_URL } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { genreNamesDetecting } from "../utils/getgenre";

const MovieCard = ({ movie }) => {
  const { id, poster_path, title, release_date, genre_ids } = movie || {};
  const genreNames = genreNamesDetecting(genre_ids);

  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Image
        className="w-full object-cover"
        src={`${BASE_IMAGE_URL}w500${poster_path}`}
        alt={title}
        width={1080}
        height={720}
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{title}</h3>

        <p className="text-[#575A6E] text-sm mb-2">{genreNames.join(", ")}</p>
        <div className="flex items-center space-x-1 mb-5">
          <Image src="/star.svg" width="14" height="14" alt="star" />
          <Image src="/star.svg" width="14" height="14" alt="star" />
          <Image src="/star.svg" width="14" height="14" alt="star" />
          <Image src="/star.svg" width="14" height="14" alt="star" />
          <Image src="/star.svg" width="14" height="14" alt="star" />
        </div>
        <Link
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href={`/movies/${id}`}
        >
          <img src="./assets/tag.svg" alt="" />
          <span>Details</span>
        </Link>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
