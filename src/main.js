import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showErrorMessage } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const input = form.querySelector('input[name="searchQuery"]');
const gallery = document.querySelector('.gallery');
const loader = document.getElementById('loader'); 
let currentPage = 1;
const perPage = 20;


function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

form.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  
  const query = input.value.trim();

  gallery.innerHTML = '';

  if (query === '') {
    showErrorMessage('Please enter a search query.');
    return;
  }

  showLoader();

  fetchImages(query, currentPage, perPage)
    .then(data => {
      hideLoader(); 

      if (data.hits.length === 0) {
        showErrorMessage('Sorry, there are no images matching your search query. Please try again!');
        return;
      }

      renderImages(data.hits);
    })
    .catch(error => {
      hideLoader(); 
      showErrorMessage('Something went wrong. Please try again later.');
    });
}

