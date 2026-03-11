import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
console.log("KEY:", import.meta.env.VITE_CLERK_PUBLISHABLE_KEY)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={"pk_test_YmV0dGVyLXNhdHlyLTkwLmNsZXJrLmFjY291bnRzLmRldiQ"}>
      <App />
    </ClerkProvider>
  </StrictMode>
)