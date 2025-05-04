import { IMAGE_URL } from "../../config.js";
import { isBookmarked } from "../services/bookmark.js";
export function renderMovies(movies, container) {
  container.innerHTML = movies
    .map(
      (movie) => `
    <div class="movie-card" data-id="${movie.id}">
      <img src="${
        movie.poster_path
          ? IMAGE_URL + movie.poster_path
          : "https://via.placeholder.com/500x750?text=No+Image"
      }" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>평점: ${movie.vote_average}</p>
      <p>${movie.overview.substring(0, 50)}...</p>
      <button class="bookmark-btn ${
        isBookmarked(movie.id) ? "bookmarked" : ""
      }">
        ${isBookmarked(movie.id) ? "Bookmarked" : "Book"}
      </button>
    </div>
  `
    )
    .join("");
}
