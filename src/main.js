import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getImagesByQuery from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showGallery,
} from "./js/render-function.js";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (e.target.elements.searchText.value.trim() === "") {
    return;
  }
  console.log(loader.classList);
  loader.classList.remove("hidden");
  try {
    clearGallery(gallery);
    const data = await getImagesByQuery(
      e.target.elements.searchText.value.trim()
    );
    if (data.hits.length === 0) {
      iziToast.warning({
        title: "Oopsie",
        message: "Didn`t found anything",
        position: "center",
      });
      return;
    }
    loader.classList.add("hidden");
    const markup = createGallery(data.hits);
    gallery.insertAdjacentHTML("afterbegin", markup);
    showGallery();
  } catch (err) {
    console.log(err);
  }
});
