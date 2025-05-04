import { initEvents } from './controllers/eventHandlers.js';
import { loadInitialMovies, updateBookmarkCount } from './controllers/loader.js';

loadInitialMovies();
updateBookmarkCount();
initEvents();