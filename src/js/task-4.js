const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    e.currentTarget.elements.password.value.trim() !== "" &&
    e.currentTarget.elements.email.value.trim() !== ""
  ) {
    console.log({
      password: `${e.currentTarget.elements.password.value.trim()}`,
      email: `${e.currentTarget.elements.email.value.trim()}`,
    });
    form.reset();
  } else {
    alert("All form fields must be filled in");
  }
});
