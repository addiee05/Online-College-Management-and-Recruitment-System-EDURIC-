const signUpFormWrapper = document.getElementById('signUpFormWrapper');
const loginFormWrapper = document.querySelector('.form-wrapper');
const signUpLink = document.getElementById('signUpLink');
const loginLink = document.getElementById('loginLink');

signUpLink.addEventListener('click', () => {
  loginFormWrapper.classList.remove('active');
  signUpFormWrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  signUpFormWrapper.classList.remove('active');
  loginFormWrapper.classList.add('active');
});

// Set initial visibility
loginFormWrapper.classList.add('active');
