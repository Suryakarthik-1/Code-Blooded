import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [mounted, setMounted] = useState(false) // NEW: Wait for component mount
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMounted(true)
      // Only redirect if we're not already on the login page
      if (router.pathname !== '/login') {
        const isAuth = localStorage.getItem('auth')
        if (isAuth === 'true') {
          router.replace('/') // use replace to avoid going back to login with back button
        }
      }
    }
  }, [router])

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('auth', 'true')
      router.push('/index-two')
    } else {
      setError('Invalid username or password')
    }
  }

  // Prevent flicker on first render
  if (!mounted) return null

  return (
    <div
      style={{
        backgroundColor: '#f9f9f9',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          minWidth: '300px',
        }}
      >
        <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Login</h2>
        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#0070f3',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
    </div>
  )
}
