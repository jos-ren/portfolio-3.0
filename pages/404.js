import React from 'react'

export default function Custom404() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'var(--secondary)',
      color: 'var(--primary)',
      fontFamily: 'sans-serif'
    }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  )
}