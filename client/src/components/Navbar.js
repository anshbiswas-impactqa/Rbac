import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Logo from '../images/ImpactQA.png'
//import AuthContext from '../context/AuthContext'
import LogoutBtn from './LogoutBtn'

const Navbar = () => {

  //const {loggedIn} = useContext(AuthContext)

  return (
    <>
      <nav className='navbar py-0 fixed navbar-expand-sm navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            <img src={Logo} alt='Logo' className='img-responsive' height={40}/>
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='/'>Home</a>
              </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/about'>About</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/contact'>Contact</a>
                  </li>
                  <LogoutBtn />
                  <li className='nav-item'>
                    <a className='nav-link' href='/signin'>Login</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/register'>Registration</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/admin'>AdminPanal</a>
                  </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar