import express from 'express'

const app = express()
const PORT = 3001

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Hello Server!',
    description: 'This is the home page. Check out other routes!',
    routes: {
      '/about': 'Learn about this server',
      '/hello': 'Get a greeting',
      '/hello/:name': 'Get a personalized greeting',
      '/users': 'List all users',
      '/status': 'Check server status',
    },
  })
})

app.get('/about', (req, res) => {
  res.json({
    message: 'About Hello Server',
    description:
      'This is a simple Express.js server that demonstrates routing with different messages on different routes.',
    version: '1.0.0',
    technology: 'Node.js + Express',
  })
})

app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello! 👋 Welcome to the Hello Server!',
    time: new Date().toLocaleString(),
  })
})

app.get('/hello/:name', (req, res) => {
  const name = req.params.name
  res.json({
    message: `Hello, ${name}! 👋 Glad to see you!`,
    greeting: `Namaste ${name}!`,
    time: new Date().toLocaleString(),
  })
})

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'User' },
  ]
  res.json({
    message: 'User List',
    total: users.length,
    users: users,
  })
})

app.get('/status', (req, res) => {
  res.json({
    message: 'Server is running smoothly! ✅',
    uptime: process.uptime(),
    timestamp: new Date().toLocaleString(),
    serverName: 'Hello Server',
    nodeVersion: process.version,
  })
})

app.get('/contact', (req, res) => {
  res.json({
    message: 'Contact Information',
    email: 'support@helloserver.com',
    phone: '+1 (555) 123-4567',
    address: '123 Server Street, Tech City, TC 12345',
    hours: 'Monday - Friday, 9 AM - 5 PM',
  })
})

app.get('/faq', (req, res) => {
  res.json({
    message: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What is Hello Server?',
        answer: 'A simple Express.js application demonstrating basic routing.',
      },
      {
        question: 'How do I get started?',
        answer: 'Visit http://localhost:3001/ to see all available routes.',
      },
      {
        question: 'Can I use this in production?',
        answer: 'This is a learning project and should not be used in production.',
      },
      {
        question: 'How do I add more routes?',
        answer: 'Edit server.js and add new app.get() or app.post() methods.',
      },
    ],
  })
})

app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `The route "${req.url}" does not exist.`,
    suggestion: 'Visit http://localhost:3001/ to see all available routes.',
  })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Server Error',
    message: 'An unexpected error occurred.',
    details: err.message,
  })
})

app.listen(PORT, () => {
  console.log(`✅ Hello Server is running on http://localhost:${PORT}`)
  console.log(`📍 Home: http://localhost:${PORT}/`)
  console.log(`📚 Available routes:`)
  console.log(`   - GET / → Home page`)
  console.log(`   - GET /about → About page`)
  console.log(`   - GET /hello → Greeting`)
  console.log(`   - GET /hello/:name → Personalized greeting`)
  console.log(`   - GET /users → List all users`)
  console.log(`   - GET /status → Server status`)
  console.log(`   - GET /contact → Contact info`)
  console.log(`   - GET /faq → FAQs`)
})
