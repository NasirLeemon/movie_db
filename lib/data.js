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
      `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.asce`,
      options
    );
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const getMovieById = async (id) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer_token}`,
    },
  };

  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}?language=en-US'`,
      options
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getTrendingMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer_token}`,
    },
  };

  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/${timeWindow}?language=en-US`,
      options
    );
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const getNewReleaseMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer_token}`,
    },
  };
  try {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?language=en-US&page=1`,
      options
    );
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const getUpcomingMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${bearer_token}`,
    },
  };
  try {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?language=en-US&page=1`,
      options
    );
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllMovies,
  getMovieById,
  getTrendingMovies,
  getNewReleaseMovies,
  getUpcomingMovies,
};
