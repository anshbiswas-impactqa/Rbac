import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {

  const {getLoggedIn} = useContext(AuthContext)

  const navigate = useNavigate()

  async function logout() {
    await axios.get('http://localhost:5000/auth/logout')
    await getLoggedIn()
    navigate('/')
  }    

  return (
    <button onClick={logout}>
        Logout
    </button>
  )
}

export default LogoutBtn