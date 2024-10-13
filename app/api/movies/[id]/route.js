import { getAllMovies, getMovieById } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  const movieId = parseInt(id);
  const data = await getMovieById(movieId);
  return NextResponse.json(data);
}

export async function PATCH(request, { params }) {
  const movieId = parseInt(params.id, 10);

  // Fetch the movie by ID
  const movie = await getMovieById(movieId);

  if (!movie) {
    console.log("Couldn't find movie");
    return NextResponse.json({ error: "Movie not found" }, { status: 404 });
  }

  // Parse the incoming JSON request
  const { title } = await request.json();

  if (!title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  // Update the movie title
  movie.title = title;

  // Return the updated movie
  return NextResponse.json(movie);
}

export async function DELETE(request, { params }) {
  const movieId = parseInt(params.id);
  const movies = await getAllMovies();
  const movieIndex = movies.findIndex((movie) => movie.id === movieId);

  const movieToDelete = movies[movieIndex];
  movies.splice(movieIndex, 1);
  return NextResponse.json(movieToDelete);
}
