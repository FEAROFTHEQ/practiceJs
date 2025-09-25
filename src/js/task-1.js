const categories = document.querySelector("#categories");
const li = document.querySelectorAll(".item");

console.log("Number of categories: ", categories.children.length);

li.forEach((child) => {
  const itemChildren = child.children;
  const [h2, ul] = itemChildren;
  // if (itemChildren.tagName === "h2") {
  console.log("Category: ", h2.textContent);
  // }
  // if (itemChildren.tagName === "ul") {
  console.log("Elements: ", ul.children.length);
  // }
  console.log("meow");
  //   console.log(itemChildren);
});
