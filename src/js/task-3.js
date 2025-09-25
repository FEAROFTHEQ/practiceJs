const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  const text = e.target.value.trim();
  text === "" ? (span.textContent = "Anonymous") : (span.textContent = text);
});
