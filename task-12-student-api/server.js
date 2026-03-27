import express from 'express';

const app = express();
const PORT = 3012;

const students = [
  { id: 1, name: 'Arjun', course: 'AI' },
  { id: 2, name: 'Priya', course: 'Web' }
];

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[LOGGER] ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Student API! Use /students endpoint' });
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const studentId = Number(req.params.id);
  const student = students.find((item) => item.id === studentId);

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  return res.json(student);
});

app.post('/students/add', (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({ message: 'name and course are required' });
  }

  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    course
  };

  students.push(newStudent);
  return res.status(201).json(newStudent);
});

app.listen(PORT, () => {
  console.log(`Task 12 Student API running on http://localhost:${PORT}`);
});
