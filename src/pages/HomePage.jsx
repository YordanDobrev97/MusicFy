
import React from 'react'
import { useSelector } from 'react-redux'

function HomePage() {
  const user = useSelector((state) => state.user.user)

  return (
    <div>
      <h1>Home Page</h1>
      <p>Logged in: {user && user.email || 'No logged in'}</p>
    </div>
  )
}

export default HomePage
