const categories = document.querySelector("#categories");
const li = document.querySelectorAll(".item");

console.log("Number of categories: ", categories.children.length);

li.forEach((child) => {
  const title = child.querySelector("h2");
  console.log("Category: ", title.textContent);
  const elements = child.querySelectorAll("li");
  console.log("Elements: ", elements.length);
  console.log("meow");
});
