import { galleryItems } from './gallery-items.js';
// Change code below this line


const fotoCardsContainer = document.querySelector('.gallery')
const fotoCards = (createFotoCards(galleryItems));

fotoCardsContainer.innerHTML = fotoCards;

fotoCardsContainer.addEventListener("click", onfotosClick);

function createFotoCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
      </a>
    </li>
    `;
    }).join('');
    
}

function onfotosClick(evt) {
    evt.preventDefault();
    const isImgEl = evt.target.classList.contains('gallery__image')
    if(!isImgEl){
        return;
    }
   
    const imgEl = evt.target;
 
    const instance = basicLightbox.create(`
    <img src="${imgEl.dataset.source}" width= "800" height="600">
`); instance.show();

    fotoCardsContainer.addEventListener("keydown" , (evt) => {
    if (evt.code === "Escape") {
        instance.close();
    }
});

}


