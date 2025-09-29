const form = document.querySelector(".form");
const createPromis = (state, delay) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        res(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        rej(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const state = e.currentTarget.elements.state.value;
  const delay = Number(e.currentTarget.elements.delay.value);

  createPromis(state, delay);
});
