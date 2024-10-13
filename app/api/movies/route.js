import { getAllMovies } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getAllMovies();
  return NextResponse.json(response);
}
