const BASE_URL = "https://api.themoviedb.org/3";
const bearer_token = process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN;
export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";
const timeWindow = "day";

const SidebarLinks = [
  {
    href: `/trending`,
    label: "Trending",
    icon: "/icons/trending.svg",
  },
  {
    href: `/new_release`,
    label: "New Releases",
    icon: "/icons/newRelease.svg",
  },
  {
    href: `/comming_soon`,
    label: "Coming Soon",
    icon: "/icons/commingSoon.svg",
  },
  {
    href: `/favourites`,
    label: "Favourites",
    icon: "/icons/favourite.svg",
  },
  {
    href: `/watch_later`,
    label: "Watch Later",
    icon: "/icons/watchLater.svg",
  },
];

export const getSidebarLinks = () => {
  return SidebarLinks;
};

const getAllMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer_token}`,
    },
  };

  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
      options
    );

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch movies, status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Return the movie results directly

    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null; // Return null or an empty array if there's an error
  }
};

const getMovieById = async (id) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer_token}`, // Use your actual bearer token here
    },
  };

  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?language=en-US`,
      options
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch movie by ID, status: ${response.status}`
      );
    }

    const data = await response.json();
    return data; // Return movie details directly
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    return null; // Return null in case of an error
  }
};

const getTrendingMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer_token}`, // Use your actual bearer token here
    },
  };

  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/${timeWindow}?language=en-US`,
      options
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch trending movies, status: ${response.status}`
      );
    }

    const data = await response.json();
    return data.results; // Return trending movie results
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return null; // Return null in case of an error
  }
};

const getNewReleaseMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer_token}`, // Use your actual bearer token here
    },
  };

  try {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?language=en-US&page=1`,
      options
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch new release movies, status: ${response.status}`
      );
    }

    const data = await response.json();
    return data.results; // Return new release movie results
  } catch (error) {
    console.error("Error fetching new release movies:", error);
    return null; // Return null in case of an error
  }
};

const getUpcomingMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer_token}`, // Use your actual bearer token here
    },
  };

  try {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?language=en-US&page=1`,
      options
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch upcoming movies, status: ${response.status}`
      );
    }

    const data = await response.json();
    return data.results; // Return upcoming movie results
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    return null; // Return null in case of an error
  }
};

export {
  getAllMovies,
  getMovieById,
  getTrendingMovies,
  getNewReleaseMovies,
  getUpcomingMovies,
};
