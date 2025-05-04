import { API_KEY, BASE_URL } from "../../config.js";

export async function fetchMovies(query = "") {
  const endpoint = query
    ? `/search/movie?query=${encodeURIComponent(query)}`
    : `/movie/popular?page=1`;

  const url = `${BASE_URL}${endpoint}&api_key=${API_KEY}&language=ko-KR`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

export async function fetchMovieDetail(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
