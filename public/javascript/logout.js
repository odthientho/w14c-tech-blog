const logoutHandler = async (event) => {
    const response = await fetch('/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to log out');
    }
  }
  
  document
    .querySelector('#logout-btn')
    .addEventListener('click', logoutHandler);