import { fetchMovies } from "../api/tmdb.js";
import { renderMovies } from "../views/ui.js";
import { getBookmarks } from "../services/bookmark.js";

const movieList = document.getElementById("movieList");
const searchInput = document.getElementById("searchInput");
const bookmarkCountSpan = document.getElementById("bookmarkCount");

export async function loadInitialMovies() {
  const movies = await fetchMovies();
  renderMovies(movies, movieList);
}

export async function searchMovies() {
  const query = searchInput.value.trim();
  const movies = await fetchMovies(query);
  renderMovies(movies, movieList);
}

export function updateBookmarkCount() {
  const bookmarks = getBookmarks();
  bookmarkCountSpan.textContent = bookmarks.length;
}
