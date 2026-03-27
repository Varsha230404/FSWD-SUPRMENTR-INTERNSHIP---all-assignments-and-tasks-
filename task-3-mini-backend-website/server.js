import express from 'express';

const app = express();
const PORT = 3003;

app.get('/', (req, res) => {
  res.send('<h1>Mini Backend Website</h1><p>Welcome to the home page.</p>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About</h1><p>This is a simple backend website built with Express.</p>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact</h1><p>Email: support@example.com</p>');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'Mini backend website is running' });
});

app.listen(PORT, () => {
  console.log(`Mini backend website running on http://localhost:${PORT}`);
});
