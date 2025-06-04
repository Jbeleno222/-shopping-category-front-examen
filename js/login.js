
async function loginUser(email, password) {
  const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem('token', data.access_token);
    window.location.href = 'main.html';
  } else {
    alert('Credenciales inválidas');
  }
}




  