import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showErrorMessage } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const input = form.querySelector('input[name="searchQuery"]');
const gallery = document.querySelector('.gallery');
let currentPage = 1;
const perPage = 20;

form.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  
  const query = input.value.trim();

  gallery.innerHTML = '';

  if (query === '') {
    showErrorMessage('Please enter a search query.');
    return;
  }

  fetchImages(query, currentPage, perPage)
    .then(data => {
      if (data.hits.length === 0) {
        showErrorMessage('Sorry, there are no images matching your search query. Please try again!');
        return;
      }
     
      renderImages(data.hits);
    })
    .catch(error => {
      showErrorMessage('Something went wrong. Please try again later.');
    });
}