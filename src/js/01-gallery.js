// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



console.log(galleryItems)
const galleryMarkup = createElementsMarkup(galleryItems);
const galleryContainer = document.querySelector(".gallery");
function createElementsMarkup(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`;
        }).join("")
};
galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
});