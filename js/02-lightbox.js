import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const fotoCardsContainer = document.querySelector('.gallery')


function createFotoCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
      </a>
    </li>
    `;
    }).join('');
    
}   const fotoCards = (createFotoCards(galleryItems));
    
    fotoCardsContainer.insertAdjacentHTML('beforeend', fotoCards);

    const lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt",captionDelay: 250, captionPosition: "bottom",});


