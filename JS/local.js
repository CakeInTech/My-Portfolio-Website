const form = document.querySelector('.form');
form.addEventListener('input', () => {
  const formInfo = {
    name: document.querySelector('.fullname').value,
    email: document.querySelector('.emails').value,
    message: document.querySelector('.contact-message').value,
  };

  localStorage.setItem('formContent', JSON.stringify(formInfo));
});

const dash = JSON.parse(localStorage.getItem('formContent'));
document.querySelector('.fullname').value = dash.name;
document.querySelector('.emails').value = dash.email;
document.querySelector('.contact-message').value = dash.message;