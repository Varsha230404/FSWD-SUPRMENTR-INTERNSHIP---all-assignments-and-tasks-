# Hello Server

A simple Node.js/Express server that demonstrates routing with different messages on different routes.

## Features

- ✅ Multiple routes returning different messages
- ✅ JSON responses on all routes
- ✅ Dynamic route parameters (e.g., `/hello/:name`)
- ✅ 404 error handling for non-existent routes
- ✅ Server status and uptime tracking
- ✅ Clean, basic code structure

## Installation

```bash
npm install
```

## Running the Server

```bash
npm start
```

The server will start on **http://localhost:3001**

## Available Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Home page with all routes listed |
| `/about` | GET | Information about the server |
| `/hello` | GET | Simple greeting message |
| `/hello/:name` | GET | Personalized greeting (e.g., `/hello/John`) |
| `/users` | GET | List of sample users |
| `/status` | GET | Server status and uptime |
| `/contact` | GET | Contact information |
| `/faq` | GET | Frequently asked questions |

## Example Usage

```bash
# Get home page
curl http://localhost:3001/

# Get personalized greeting
curl http://localhost:3001/hello/Alice

# Get users list
curl http://localhost:3001/users

# Check server status
curl http://localhost:3001/status
```

## Project Structure

```
hello-server/
├── server.js      # Main Express server file
├── package.json   # Project configuration
├── README.md      # This file
└── .gitignore     # Git ignore file
```

## Learning Outcomes

This project demonstrates:
- Setting up a basic Express.js server
- Creating multiple routes with different purposes
- Returning JSON responses
- Handling dynamic route parameters
- Error handling (404 and 500 errors)
- Server logging and console output
