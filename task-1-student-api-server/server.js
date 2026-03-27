import express from 'express';

const app = express();
const PORT = 3001;

const students = [
  { name: 'Amit', course: 'AI' },
  { name: 'Riya', course: 'FullStack' },
  { name: 'Rahul', course: 'DataScience' }
];

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Student API Server - Use /students or /courses endpoints');
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/courses', (req, res) => {
  const courses = [...new Set(students.map((student) => student.course))];
  res.json(courses);
});

app.listen(PORT, () => {
  console.log(`Student API Server running on http://localhost:${PORT}`);
});
