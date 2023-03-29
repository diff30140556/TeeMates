const loginFormHandler = async (event) => {
  alert("login handler");
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the userdash page
      document.location.replace('/userdash');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  
  // Collect values from the signup form
  const username = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({ user_name: username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const loginFormEl = document.querySelector('#login-form');
  if (loginFormEl) {
    loginFormEl.addEventListener('submit', loginFormHandler);
  }

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
