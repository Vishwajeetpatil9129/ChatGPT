import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'  // 👈 import dark theme

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider 
      publishableKey="pk_test_YmV0dGVyLXNhdHlyLTkwLmNsZXJrLmFjY291bnRzLmRldiQ"
      appearance={{ baseTheme: dark }}  // 👈 added dark theme
    >
      <App />
    </ClerkProvider>
  </StrictMode>
)