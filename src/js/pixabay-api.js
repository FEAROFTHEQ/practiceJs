import axios from "axios";

const key = "44686774-01236c387d1eefb9bce1c8eeb";
axios.defaults.baseURL = "https://pixabay.com/api/";

export default async function getImagesByQuery(query) {
  // const response = await axios.get(
  //   `?key=${key}&q=${query.trim().split(" ").join("+")}&image_type=photo`);
  const response = await axios.get("", {
    params: {
      key: key,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  });
  return response.data;
}
