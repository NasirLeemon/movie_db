"use client";

import { extractMovieId } from "@/app/utils/extractMovieId";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  const movieId = extractMovieId(pathname);
  return (
    <div className="h-[100vh]">
      <h1 className="text-4xl">
        This movie with " {movieId} " id was not found!
      </h1>
    </div>
  );
};

export default NotFound;
