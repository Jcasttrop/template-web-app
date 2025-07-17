'use client'
import { supabaseServerClient } from '@/utils/supabase/server'

export default function LoginWithGoogleButton() {
  const handleLogin = async () => {
    const supabase = await supabaseServerClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      }
    })
  }

  return (
    <button onClick={handleLogin}>
      Sign in with Google
    </button>
  )
}