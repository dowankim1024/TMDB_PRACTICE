const STORAGE_KEY = "bookmarkedMovies";

export function addBookmark(movieId) {
  const bookmarks = getBookmarks();
  if (!bookmarks.includes(movieId)) {
    bookmarks.push(movieId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  }
}

export function removeBookmark(movieId) {
  const bookmarks = getBookmarks();
  const newBookmarks = bookmarks.filter((id) => id !== movieId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newBookmarks));
}

export function getBookmarks() {
  const bookmarks = localStorage.getItem(STORAGE_KEY);
  return bookmarks ? JSON.parse(bookmarks) : [];
}

export function isBookmarked(movieId) {
  return getBookmarks().includes(movieId);
}
