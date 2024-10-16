import { BASE_IMAGE_URL } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const MovieDetails = async ({ id }) => {
  const { getMovieById } = await import("@/lib/data");

  const movie = await getMovieById(parseInt(id));
  if (!movie) {
    notFound();
  }
  const {
    backdrop_path,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    vote_average,
    vote_count,
  } = movie;

  return (
    <section className="">
      <div>
        <Image
          className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
          src={`${BASE_IMAGE_URL}original${backdrop_path}`}
          alt={title}
          width={1920}
          height={1080}
        />
      </div>
      <div className="grid md:grid-cols-12 py-12 gap-8">
        <div className="hidden md:block md:col-span-2">
          <Image
            src={`${BASE_IMAGE_URL}w500${poster_path}`}
            alt={title}
            width={1920}
            height={1080}
          />
        </div>
        <div className="col-span-11 md:col-span-8">
          <h2 className="font-bold text-slate-300 text-2xl">
            {original_title}
          </h2>
          <p className="my-2 text-slate-400 italic text-sm md:text-lg">
            {overview}
          </p>
          <ul className="text-slate-300 space-y-2 my-8 text-sm md:text-lg">
            <li className="text-xs md:text-lg">
              Release Date : {release_date}
            </li>
            <li className="text-xs md:text-lg">
              Average Vote : {vote_average}
            </li>
            <li className="text-xs md:text-lg">Vote Count : {vote_count}</li>
            <li className="text-xs md:text-lg">Popularity : {popularity}</li>
          </ul>
        </div>
        <div className=" col-span-11 md:col-span-2  space-y-4">
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            Stream In HD
          </button>
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            Download In HD
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
