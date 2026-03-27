import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ email: '', password: '' })
  const [successMessage, setSuccessMessage] = useState('')

  function validateEmail(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!value.trim()) {
      return 'Email is required.'
    }
    if (!emailPattern.test(value)) {
      return 'Please enter a valid email address.'
    }
    return ''
  }

  function validatePassword(value) {
    if (!value) {
      return 'Password is required.'
    }

    const rules = [
      { check: value.length >= 8, message: 'At least 8 characters' },
      { check: /[A-Z]/.test(value), message: 'At least one uppercase letter' },
      { check: /[a-z]/.test(value), message: 'At least one lowercase letter' },
      { check: /\d/.test(value), message: 'At least one number' },
      {
        check: /[^A-Za-z0-9]/.test(value),
        message: 'At least one special character',
      },
    ]

    const failedRule = rules.find((rule) => !rule.check)
    return failedRule ? failedRule.message : ''
  }

  function getPasswordStrength(value) {
    if (!value) {
      return 'No password entered'
    }

    let score = 0
    if (value.length >= 8) score += 1
    if (/[A-Z]/.test(value)) score += 1
    if (/[a-z]/.test(value)) score += 1
    if (/\d/.test(value)) score += 1
    if (/[^A-Za-z0-9]/.test(value)) score += 1

    if (score <= 2) return 'Weak'
    if (score <= 4) return 'Medium'
    return 'Strong'
  }

  function handleSubmit(event) {
    event.preventDefault()

    const emailError = validateEmail(email)
    const passwordError = validatePassword(password)

    setErrors({ email: emailError, password: passwordError })

    if (!emailError && !passwordError) {
      setSuccessMessage('Signup successful!')
      setEmail('')
      setPassword('')
      setErrors({ email: '', password: '' })
      return
    }

    setSuccessMessage('')
  }

  const passwordStrength = getPasswordStrength(password)

  return (
    <div className="signup-page">
      <form className="signup-card" onSubmit={handleSubmit} noValidate>
        <h1>Smart Signup Form</h1>
        <p className="subtitle">Create your account</p>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter strong password"
        />
        <p className="strength-text">Password strength: {passwordStrength}</p>
        {errors.password && <p className="error-text">{errors.password}</p>}

        <button type="submit">Sign Up</button>

        {successMessage && <p className="success-text">{successMessage}</p>}
      </form>
    </div>
  )
}

export default App
