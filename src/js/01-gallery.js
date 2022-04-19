// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryLightboxMarkUp = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}"
    alt="${description}"
    title="${description}" />
    </a></div>
    `;
  })
  .join('');

const gallery = document.querySelector('div.gallery');

gallery.insertAdjacentHTML('beforeend', galleryLightboxMarkUp);
const galleryLightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
