import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Folder Architect! Use /api/folders and /api/files endpoints' });
})

let folders = ['Documents', 'Images', 'Downloads']
let files = [
  { name: 'report.pdf', size: '2.3 MB', type: 'PDF' },
  { name: 'photo.jpg', size: '1.4 MB', type: 'Image' },
  { name: 'notes.txt', size: '15 KB', type: 'Text' },
]
let clipboard = null

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

app.get('/api/folders', async (req, res) => {
  try {
    await delay(1500)
    res.json({ success: true, data: folders })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

app.post('/api/folders', async (req, res) => {
  try {
    const { name } = req.body
    if (!name || !name.trim()) {
      return res
        .status(400)
        .json({ success: false, message: 'Folder name is required.' })
    }
    await delay(1000)
    if (folders.includes(name)) {
      return res.status(400).json({
        success: false,
        message: `Folder "${name}" already exists.`,
      })
    }
    folders.push(name)
    res.json({
      success: true,
      message: `Folder "${name}" created successfully.`,
      data: folders,
    })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

app.delete('/api/folders/:name', async (req, res) => {
  try {
    const { name } = req.params
    await delay(1000)
    const index = folders.indexOf(name)
    if (index === -1) {
      return res
        .status(404)
        .json({ success: false, message: `Folder "${name}" not found.` })
    }
    folders.splice(index, 1)
    res.json({
      success: true,
      message: `Folder "${name}" deleted successfully.`,
      data: folders,
    })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

app.get('/api/files', async (req, res) => {
  try {
    await delay(1500)
    res.json({ success: true, data: files })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

app.post('/api/files', async (req, res) => {
  try {
    const { name, size, type } = req.body
    if (!name || !name.trim()) {
      return res
        .status(400)
        .json({ success: false, message: 'File name is required.' })
    }
    await delay(1200)
    if (files.some((f) => f.name === name)) {
      return res.status(400).json({
        success: false,
        message: `File "${name}" already exists.`,
      })
    }
    const newFile = {
      name: name.trim(),
      size: size || '1 KB',
      type: type || 'File',
    }
    files.push(newFile)
    res.json({
      success: true,
      message: `File "${name}" created successfully.`,
      data: files,
    })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

app.delete('/api/files/:name', async (req, res) => {
  try {
    const { name } = req.params
    await delay(1000)
    const index = files.findIndex((f) => f.name === name)
    if (index === -1) {
      return res
        .status(404)
        .json({ success: false, message: `File "${name}" not found.` })
    }
    files.splice(index, 1)
    res.json({
      success: true,
      message: `File "${name}" deleted successfully.`,
      data: files,
    })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

app.post('/api/files/copy', async (req, res) => {
  try {
    const { name } = req.body
    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: 'File name is required.' })
    }
    await delay(800)
    const file = files.find((f) => f.name === name)
    if (!file) {
      return res
        .status(404)
        .json({ success: false, message: `File "${name}" not found.` })
    }
    clipboard = { operation: 'copy', file: { ...file } }
    res.json({
      success: true,
      message: `File "${name}" copied. Paste it elsewhere.`,
      clipboard: clipboard,
    })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

app.post('/api/files/cut', async (req, res) => {
  try {
    const { name } = req.body
    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: 'File name is required.' })
    }
    await delay(800)
    const file = files.find((f) => f.name === name)
    if (!file) {
      return res
        .status(404)
        .json({ success: false, message: `File "${name}" not found.` })
    }
    clipboard = { operation: 'cut', file: { ...file }, source: name }
    res.json({
      success: true,
      message: `File "${name}" cut. Paste to move it.`,
      clipboard: clipboard,
    })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

app.post('/api/files/paste', async (req, res) => {
  try {
    if (!clipboard) {
      return res.status(400).json({
        success: false,
        message: 'Nothing in clipboard. Copy or cut a file first.',
      })
    }
    await delay(1200)

    if (clipboard.operation === 'copy') {
      const newFile = { ...clipboard.file }
      if (files.some((f) => f.name === newFile.name)) {
        newFile.name = `${newFile.name}_copy`
      }
      files.push(newFile)
      res.json({
        success: true,
        message: `File pasted as "${newFile.name}".`,
        data: files,
      })
    } else if (clipboard.operation === 'cut') {
      const index = files.findIndex((f) => f.name === clipboard.source)
      if (index !== -1) {
        files.splice(index, 1)
      }
      files.push(clipboard.file)
      res.json({
        success: true,
        message: `File "${clipboard.file.name}" moved successfully.`,
        data: files,
      })
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

app.get('/api/clipboard', (req, res) => {
  res.json({ clipboard })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Folder Architect server running at http://localhost:${PORT}`)
})
