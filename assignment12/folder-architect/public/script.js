const API_URL = 'http://localhost:3000/api'

function showStatus(message, type = 'info') {
  const elem = document.getElementById('statusMessage')
  elem.textContent = message
  elem.className = `status-message show ${type}`
  setTimeout(() => {
    elem.classList.remove('show')
  }, 4000)
}

function showLoading(message = 'Retrieving data. Wait a few seconds...') {
  showStatus(message, 'loading')
}

async function loadFolders() {
  try {
    showLoading('Retrieving folders...')
    const response = await fetch(`${API_URL}/folders`)
    const result = await response.json()
    if (result.success) {
      displayFolders(result.data)
      showStatus('Folders loaded successfully.', 'success')
    }
  } catch (err) {
    showStatus(`Error loading folders: ${err.message}`, 'error')
  }
}

function displayFolders(folders) {
  const container = document.getElementById('folderList')
  if (folders.length === 0) {
    container.innerHTML = '<p class="loading">No folders yet.</p>'
    return
  }
  container.innerHTML = folders
    .map(
      (folder) => `
    <div class="list-item">
      <div class="list-item-info">
        <div class="list-item-name">🗂️ ${folder}</div>
      </div>
      <div class="list-item-actions">
        <button class="btn-icon delete" onclick="deleteFolder('${folder}')">Delete</button>
      </div>
    </div>
  `
    )
    .join('')
}

async function createFolder() {
  const input = document.getElementById('folderInput')
  const name = input.value.trim()
  if (!name) {
    showStatus('Please enter a folder name.', 'error')
    return
  }
  try {
    showLoading('Creating folder...')
    const response = await fetch(`${API_URL}/folders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    })
    const result = await response.json()
    if (result.success) {
      displayFolders(result.data)
      input.value = ''
      showStatus(result.message, 'success')
    } else {
      showStatus(result.message, 'error')
    }
  } catch (err) {
    showStatus(`Error: ${err.message}`, 'error')
  }
}

async function deleteFolder(name) {
  if (!confirm(`Delete folder "${name}"?`)) return
  try {
    showLoading('Deleting folder...')
    const response = await fetch(`${API_URL}/folders/${encodeURIComponent(name)}`, {
      method: 'DELETE',
    })
    const result = await response.json()
    if (result.success) {
      displayFolders(result.data)
      showStatus(result.message, 'success')
    } else {
      showStatus(result.message, 'error')
    }
  } catch (err) {
    showStatus(`Error: ${err.message}`, 'error')
  }
}

async function loadFiles() {
  try {
    showLoading('Retrieving files...')
    const response = await fetch(`${API_URL}/files`)
    const result = await response.json()
    if (result.success) {
      displayFiles(result.data)
      showStatus('Files loaded successfully.', 'success')
    }
  } catch (err) {
    showStatus(`Error loading files: ${err.message}`, 'error')
  }
}

function displayFiles(files) {
  const container = document.getElementById('fileList')
  if (files.length === 0) {
    container.innerHTML = '<p class="loading">No files yet.</p>'
    return
  }
  container.innerHTML = files
    .map(
      (file) => `
    <div class="list-item">
      <div class="list-item-info">
        <div class="list-item-name">📄 ${file.name}</div>
        <div class="list-item-detail">${file.type} • ${file.size}</div>
      </div>
      <div class="list-item-actions">
        <button class="btn-icon copy" onclick="copyFile('${file.name}')">Copy</button>
        <button class="btn-icon cut" onclick="cutFile('${file.name}')">Cut</button>
        <button class="btn-icon delete" onclick="deleteFile('${file.name}')">Delete</button>
      </div>
    </div>
  `
    )
    .join('')
}

async function createFile() {
  const input = document.getElementById('fileInput')
  const typeInput = document.getElementById('fileType')
  const name = input.value.trim()
  const type = typeInput.value.trim() || 'File'
  if (!name) {
    showStatus('Please enter a file name.', 'error')
    return
  }
  try {
    showLoading('Creating file...')
    const response = await fetch(`${API_URL}/files`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, size: '1 KB', type }),
    })
    const result = await response.json()
    if (result.success) {
      displayFiles(result.data)
      input.value = ''
      typeInput.value = ''
      showStatus(result.message, 'success')
    } else {
      showStatus(result.message, 'error')
    }
  } catch (err) {
    showStatus(`Error: ${err.message}`, 'error')
  }
}

async function deleteFile(name) {
  if (!confirm(`Delete file "${name}"?`)) return
  try {
    showLoading('Deleting file...')
    const response = await fetch(`${API_URL}/files/${encodeURIComponent(name)}`, {
      method: 'DELETE',
    })
    const result = await response.json()
    if (result.success) {
      displayFiles(result.data)
      showStatus(result.message, 'success')
    } else {
      showStatus(result.message, 'error')
    }
  } catch (err) {
    showStatus(`Error: ${err.message}`, 'error')
  }
}

async function copyFile(name) {
  try {
    showLoading('Copying file...')
    const response = await fetch(`${API_URL}/files/copy`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    })
    const result = await response.json()
    if (result.success) {
      updateClipboard(result.clipboard)
      showStatus(result.message, 'success')
    } else {
      showStatus(result.message, 'error')
    }
  } catch (err) {
    showStatus(`Error: ${err.message}`, 'error')
  }
}

async function cutFile(name) {
  try {
    showLoading('Cutting file...')
    const response = await fetch(`${API_URL}/files/cut`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    })
    const result = await response.json()
    if (result.success) {
      updateClipboard(result.clipboard)
      showStatus(result.message, 'success')
    } else {
      showStatus(result.message, 'error')
    }
  } catch (err) {
    showStatus(`Error: ${err.message}`, 'error')
  }
}

async function pasteFile() {
  try {
    showLoading('Pasting file. Wait a few seconds and try to cut or copy again.')
    const response = await fetch(`${API_URL}/files/paste`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
    const result = await response.json()
    if (result.success) {
      displayFiles(result.data)
      updateClipboard(null)
      showStatus(result.message, 'success')
    } else {
      showStatus(result.message, 'error')
    }
  } catch (err) {
    showStatus(`Error: ${err.message}`, 'error')
  }
}

function updateClipboard(clipboard) {
  const elem = document.getElementById('clipboardStatus')
  if (!clipboard) {
    elem.textContent = 'Empty'
    return
  }
  const operation = clipboard.operation === 'copy' ? '📋 Copy' : '✂️ Cut'
  elem.innerHTML = `
    <div>${operation}: ${clipboard.file.name}</div>
    <button class="btn-primary" onclick="pasteFile()" style="margin-top: 8px; width: 100%;">📌 Paste</button>
  `
}

window.addEventListener('load', () => {
  loadFolders()
  loadFiles()
})
