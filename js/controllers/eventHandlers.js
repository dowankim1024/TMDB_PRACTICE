import { searchMovies } from './loader.js';
import { fetchMovieDetail, fetchMovies } from '../api/tmdb.js';
import { renderMovies } from '../views/ui.js';
import { openModal } from '../views/modal.js';
import { addBookmark, removeBookmark, isBookmarked, getBookmarks } from '../services/bookmark.js';
import { updateBookmarkCount } from './loader.js';

export function initEvents() {
  const movieList = document.getElementById("movieList");
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  const viewBookmarksButton = document.getElementById("viewBookmarks");
  const homeButton = document.getElementById("homeButton");

  let searchTimeout;
  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchMovies();
    }, 500);
  });
  searchInput.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
      searchMovies();
    }
  });
  searchButton.addEventListener("click", searchMovies);

  movieList.addEventListener("click", async (e) => {
    const card = e.target.closest(".movie-card");
    if (!card) return;

    const movieId = parseInt(card.dataset.id);
    if (e.target.classList.contains("bookmark-btn")) {
      if (isBookmarked(movieId)) {
        removeBookmark(movieId);
        e.target.textContent = "Book";
        e.target.classList.remove("bookmarked");
        alert("북마크 해제!");
      } else {
        addBookmark(movieId);
        e.target.textContent = "Bookmarked";
        e.target.classList.add("bookmarked");
        alert("북마크 추가!");
      }
      updateBookmarkCount();
    } else {
      const movie = await fetchMovieDetail(movieId);
      openModal(movie, modal, modalContent);
    }
  });

  viewBookmarksButton.addEventListener("click", async () => {
    const bookmarkIds = getBookmarks();
    const bookmarkMovies = [];
    for (const id of bookmarkIds) {
      const movie = await fetchMovieDetail(id);
      bookmarkMovies.push(movie);
    }
    renderMovies(bookmarkMovies, movieList);
  });

  homeButton.addEventListener("click", async () => {
    const movies = await fetchMovies();
    renderMovies(movies, movieList);
  });
}
