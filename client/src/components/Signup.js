import axios from 'axios'
import React, { useState, useContext } from 'react'
import Signuplogo from '../images/Signup.jpg'
import {NavLink, useNavigate} from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [work, setWork] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')

  const {getLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()

  async function register(e) {
    e.preventDefault()

    try {
      const registerData = {
        name, 
        email, 
        phone, 
        work, 
        password, cpassword
      }

      await axios.post('http://localhost:5000/auth/register/', registerData)
      await getLoggedIn()
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <section className='register py-5 bg-light'>
      <div className='container mt-5'>
        <div className='frame row g-3 me-3'>
          <div className='col-lg-6 my-2'>
            <img src={Signuplogo} alt='SignupPic' className='img-fluid' />
          </div>
          <div className='col-lg-6 text-center'>
            <div className='form-title py-2'>
              <h1>Registration</h1>
            </div>
            <form onSubmit={register} className='register-form' id='register-form'> 
              <div className='form-row'>
                <div className='form-group col-md-12'>
                  <i className='bi bi-person-fill mx-2'></i>
                  <input type='text' name='name' id='name' autoComplete='off' className='inp px-3' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Your Name' />
                </div>
                <div className='form-group col-md-12 mt-2'>
                  <i className='bi bi-envelope-fill mx-2'></i>
                  <input type='email' name='email' id='email' autoComplete='off' className='inp px-3' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Your Email' />
                </div>
                <div className='form-group col-md-12 mt-2'>
                  <i className='bi bi-telephone-fill mx-2'></i>
                  <input type='number' name='phone' id='phone' autoComplete='off' className='inp px-3' 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Your Phone no.' />
                </div>
                <div className='form-group col-md-12 mt-2'>
                  <i className='bi bi-person-workspace mx-2'></i>
                  <input type='text' name='work' id='work' autoComplete='off' className='inp px-3' 
                    value={work}
                    onChange={(e) => setWork(e.target.value)}
                    placeholder='Your Profession' />
                </div>
                <div className='form-group col-md-12 mt-2'>
                  <i className='bi bi-lock-fill mx-2'></i>
                  <input type='password' name='password' id='password' autoComplete='off' className='inp px-3' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter a Password' />
                </div>
                <div className='form-group col-md-12 mt-2'>
                  <i className='bi bi-lock-fill mx-2'></i>
                  <input type='password' name='cpassword' id='cpassword' autoComplete='off' className='inp px-3 mb-1' 
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                    placeholder='Confirm Your Password' />
                </div>
              </div>
              <div className='form-group form-button mt-2'>
                <input type='submit' name='signup' id='signup' className='form-submit mt-2' 
                value='Register' ></input>
              </div>
            </form>
            <div className='mt-2 mb-2'>
              Already have an account?
                <NavLink to='/signin' className='mx-1'>
                  Sign In  
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup








/*
  const navigate = useNavigate()
  const[user, setUser] = useState({
    name:'',
    email:'',
    phone:'',
    work:'',
    password:'',
    cpassword:''
  })

  let name, value;

  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name
    value = e.target.value

    setUser({...user, [name]:value})
  }

  const PostData = async (e) => {
    e.preventDefault()

    const{name, email, phone, work, password, cpassword} = user
  
    const res = await fetch('/register', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, 
        email, 
        phone, 
        work, 
        password, cpassword
      })
    })

    const data = res.json

    if(res.status === 400 || !data) {
      window.alert('Invalid Registration')
    } else {
        window.alert('Registration Successful')
        navigate('/signin')
    }
  }
*/