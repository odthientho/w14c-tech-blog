const authenticationHandler = async (event) => {
  event.preventDefault();
  
  const authentication = document.querySelector('#authentication').innerHTML.toLowerCase().trim();
  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();
  
  if (username && password) {
    if (authentication === "login") {
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    } else if (authentication === "sign up") {
      const response = await fetch('/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  }
};
  
document
  .querySelector('.authentication-form')
  .addEventListener('submit', authenticationHandler);