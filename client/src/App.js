import React, { useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Employees from './employees/Employees'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import AdminPanal from './admin/AdminPanal'
import ErrorPage from './components/ErrorPage'
import AuthContext from './context/AuthContext'

function App () {
  const {loggedIn} = useContext(AuthContext)

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
              <Route path='/about' element={<Employees />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/signin' element={<Login />} />
              <Route path='/register' element={<Signup />} />
              <Route path='/admin' element={<AdminPanal />} />
          <Route path='/notfound' element={<ErrorPage />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </Router>
  )
}

export default App