import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function createGallery(images) {
  const markup = images
    .map((image) => {
      return `  <li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}" onclick="event.preventDefault()">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      data-source="${image.largeImageURL}"
      alt="${image.tags}"
    />
    <p>Likes: ${image.likes}</p>
    <p>Views: ${image.views}</p>
    <p>Comments: ${image.comments}</p>
    <p>Downloads: ${image.downloads}</p>
  </a>
</li>`;
    })
    .join("");
  return markup;
}
export function clearGallery(gallery) {
  gallery.innerHTML = "";
}
export function showGallery() {
  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
  lightbox.refresh();
}

export function showLoader() {}
export function hideLoader() {}
