const formData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
form.elements.message.value = formData.message;
form.elements.email.value = formData.email;

form.addEventListener('input', e => {
  if (e.target.name === 'email') {
    formData.email = e.target.value.trim();
  }
  if (e.target.name === 'message') {
    formData.message = e.target.value.trim();
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill all fields');
    return;
  }
  console.log(formData);
  form.reset();
  const formData = {
    email: '',
    message: '',
  };
  localStorage.removeItem('feedback-form-state');
});
