const domForm = document.getElementById('domForm');
const statusText = document.getElementById('status');

const validEmail = (email) => /\S+@\S+\.\S+/.test(email);

domForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const comment = document.getElementById('comment').value.trim();

  if (!name || !email || !comment) {
    statusText.textContent = 'Please fill out every field.';
    statusText.style.color = 'crimson';
    return;
  }

  if (!validEmail(email)) {
    statusText.textContent = 'Please provide a valid email address.';
    statusText.style.color = 'crimson';
    return;
  }

  statusText.textContent = 'Validation passed. Form is ready to submit.';
  statusText.style.color = 'green';
  domForm.reset();
});
