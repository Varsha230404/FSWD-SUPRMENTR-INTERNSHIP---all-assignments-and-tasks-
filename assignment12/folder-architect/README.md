# Folder Architect

A file and folder management system built with Node.js/Express and vanilla JavaScript.

## Features

- **Create Folders** - Instantly create new folders
- **Create Files** - Add files with custom type info
- **Delete** - Remove folders and files with confirmation
- **Copy Files** - Copy files to clipboard for duplication
- **Cut Files** - Cut files to move them (paste elsewhere)
- **Paste Files** - Paste copied or cut files
- **Async Operations** - All operations simulate data retrieval with delays
- **Live Status Updates** - Real-time feedback on all actions

## Installation

```bash
npm install
```

## Running the Server

```bash
npm start
```

The server will run on **http://localhost:3000**

- Frontend: http://localhost:3000/
- API Base: http://localhost:3000/api

## API Endpoints

### Folders

- `GET /api/folders` - List all folders
- `POST /api/folders` - Create a new folder
- `DELETE /api/folders/:name` - Delete a folder

### Files

- `GET /api/files` - List all files
- `POST /api/files` - Create a new file
- `DELETE /api/files/:name` - Delete a file
- `POST /api/files/copy` - Copy a file to clipboard
- `POST /api/files/cut` - Cut a file to clipboard (for moving)
- `POST /api/files/paste` - Paste a file from clipboard
- `GET /api/clipboard` - Check clipboard status

## Key Features

- **Async Delays** - All operations include delays (1000-1500ms) to simulate real data retrieval
- **In-Memory Storage** - Data is stored in memory (resets on server restart)
- **Error Handling** - Comprehensive validation and error messages
- **CORS Enabled** - API accessible from frontend
- **Clean UI** - Gradient interface with responsive design
