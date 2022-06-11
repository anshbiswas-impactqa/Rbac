import axios from 'axios'
import React, {useContext, useState} from 'react'
import Loginlogo from '../images/Login.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {getLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()

  async function login(e) {
    e.preventDefault()

    try {
      const loginData = {
        email,
        password
      }

      await axios.post('http://localhost:5000/auth/signin', loginData)
      await getLoggedIn()
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <section className='signin py-5 bg-light'>
      <div className='container mt-5'>
        <div className='frame row g-3 me-3'>
          <div className='col-md-6 flex my-2'>
            <img src={Loginlogo} alt='SigninPic' className='img-fluid' />
          </div> 
          <div className='col-md-6 text-center'>
            <div className='form-title py-3'>
              <h1>Login</h1>
            </div>
            <form onSubmit={login} className='signin-form' id='signin-form'> 
              <div className='form-row pt-3 pb-3'>
                <div className='form-group col-md-12'>
                  <i className='bi bi-envelope-fill mx-2'></i>
                  <input type='email' name='email' id='email' autoComplete='off' className='inp px-3' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='Your Email' />
                </div>
                <div className='form-group col-md-12 mt-2'>
                  <i className='bi bi-lock-fill mx-2'></i>
                  <input type='password' name='password' id='password' autoComplete='off' className='inp px-3' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter Your Password' />
                </div>
              </div>

              <div className='form-group form-button mt-2'>
                <input type='submit' name='signin' 
                  id='signin' className='form-submit mt-3' 
                  value='Log In'
                ></input>
              </div>
            </form>
            <div className='mt-2 mb-2'>
              Create an Account.
                <NavLink to='/register' className='mx-1'>
                  Register 
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login









/*const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const loginUser = async (e) => {
    e.preventDefault()

    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      }, 
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = res.json

    if(res.status === 400 || !data) {
      window.alert('Invalid Credentials')
    } else {
      navigate('/')
    }
  }
*/