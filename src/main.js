import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getImagesByQuery from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-function.js";

const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e.target.elements.searchText.value);
  if (e.target.elements.searchText.value.trim() === "") {
    return;
  }
  try {
    const data = await getImagesByQuery(
      e.target.elements.searchText.value.trim()
    );
    console.log(data.hits);
    if (data.hits.length === 0) {
      iziToast.warning({
        title: "Oopsie",
        message: "Didn`t found anything",
        position: "center",
      });
      return;
    }
  } catch (err) {
    console.log(err);
  }
});
