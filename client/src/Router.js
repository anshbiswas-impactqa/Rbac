import React from 'react'
import App from './App'
import axios from 'axios'
import { AuthContextProvider } from './context/AuthContext'

axios.defaults.withCredentials = true

function Router() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  )
}

export default Router