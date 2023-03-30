const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log('ss')
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
    console.log(response)
    console.log('response')
    if (response.ok) {
      console.log('tes')
      // If successful, redirect the browser to the profile page
      document.location.replace('/userdash');
    } else {
      const message = await response.json()
      alertMessageEl.textContent = message.message;
    }
  }
};
const alertMessageEl = document.querySelector('.alertMessage')

document
  .querySelector('#loginForm')
  .addEventListener('submit', loginFormHandler);
