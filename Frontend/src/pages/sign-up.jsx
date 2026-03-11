import { SignUp } from '@clerk/clerk-react'

export default function SignUpPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
      <SignUp />
    </div>
  )
}