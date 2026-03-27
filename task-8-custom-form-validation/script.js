const form = document.getElementById('customForm');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = form.username.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  if (!username || !email || !password || !confirmPassword) {
    message.textContent = 'All fields are required.';
    message.style.color = 'red';
    return;
  }

  if (!email.includes('@')) {
    message.textContent = 'Enter a valid email.';
    message.style.color = 'red';
    return;
  }

  if (password.length < 6) {
    message.textContent = 'Password must be at least 6 characters.';
    message.style.color = 'red';
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = 'Passwords do not match.';
    message.style.color = 'red';
    return;
  }

  message.textContent = 'Form submitted successfully!';
  message.style.color = 'green';
  form.reset();
});
