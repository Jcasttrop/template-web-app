'use client'

import { logout } from '@/app/actions/auth'
import { useState } from 'react'

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      await logout()
    } catch (error) {
      console.error('Logout error:', error)
      setIsLoading(false)
    }
  }

  if (showConfirm) {
    return (
      <div className="flex gap-2">
        <button
          onClick={handleLogout}
          disabled={isLoading}
          className="bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-sm"
        >
          {isLoading ? 'Signing out...' : 'Confirm'}
        </button>
        <button
          onClick={() => setShowConfirm(false)}
          disabled={isLoading}
          className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-sm"
        >
          Cancel
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => setShowConfirm(true)}
      className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
    >
      Sign Out
    </button>
  )
}