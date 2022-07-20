const contactForm = document.querySelector('.form');
const validationMessage = document.querySelector('.validationMessage');
const emailImput = document.querySelector('.emails');

contactForm.addEventListener('submit', (par1) => {
  const stringMessage = emailImput.value;
  if (/[A-Z]/.test(stringMessage)) {
    validationMessage.innerHTML = 'You are supposed to use lowercase for the email.';
    par1.preventDefault();
  } else {
    validationMessage.innerHTML = '';
  }
});
