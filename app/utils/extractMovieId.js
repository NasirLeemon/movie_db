export const extractMovieId = (pathname) => {
  const segments = pathname.split("/");
  return segments[segments.length - 1];
};
