import './js/pixabay-api';
import './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const query = formData.get('search-text');

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term!',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      const images = data.hits || [];

      if (!images.length) {
        iziToast.error({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      createGallery(images);
    })
    .catch(err => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Try again later.',
      });
    })
    .finally(() => {
      hideLoader();
    });
  form.reset();
}
