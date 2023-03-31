const signupFormHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (user_name && email && password) {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({ user_name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      return;
    }
  }
};


document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);