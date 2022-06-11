import React from 'react'
import empPic from '../images/Profilepic.jpg'
//import {useNavigate} from 'react-router-dom'

const About = () => {
  
  return (
    <>
      <div className='container frame mt-5 profile-pic'>
        <form method="">
          <div className='row g-3 mt-5'>
            <div className='col-md-4'>
              <div className='profile-img'>
              <img src={empPic} alt='empPic' />
              </div>
            </div>

            <div className='col-md-5'>
              <div className='profile-head'>
                <h5>Name</h5>
                <h6>Web Developer</h6>
                <p className='profile-rating mt-3 mb-5'>RANKINGS: <span> 1/10 </span></p>

                <ul className='nav nav-tabs' role='tablist'>
                  <li className='nav-item'>
                    <a className='nav-link active' id='home-tab' data-toggle='tab' href='#home' role='tab'>About</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-md-3'>
              <input type='submit' className='profile-edit-btn' name='btnAddMore' value='Edit Profile' />
            </div>

            <div className='row'>
              {/* left side url */}
              <div className='col-md-4'>
                <div className='profile-work py-2'>
                  <p> WORK LINK </p>
                  <a href='' target='user'>Link</a><br />
                  <a href='' target='user'>Link</a><br />
                  <a href='' target='user'>Link</a><br />
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value='' id='isBillable' />
                    <label className='form-check-label' htmlFor='flexCheckDefault'>
                    isBilliable
                    </label>
                  </div>
                </div>
              </div>
              
              {/* right side data toggle */}
              
              <div className='col-md-7 about-info'>
                <div className='tab-content profile-tab' id='myTabContent'>
                    <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
                      <div className='row'>
                        <div className='col-md-6'>
                          <label>empID</label>
                        </div>
                        <div className='col-md-6'>
                          <p>5454149566595</p>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <label>empName</label>
                        </div>
                        <div className='col-md-6'>
                          <p>Ansh Biswas</p>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <label>empDOB</label>
                        </div>
                        <div className='col-md-6'>
                          <p>25/02/1999</p>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <label>empPhone</label>
                        </div>
                        <div className='col-md-6'>
                          <p>8373944018</p>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <label>empProfession</label>
                        </div>
                        <div className='col-md-6'>
                          <p>Full stack developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </form>
      </div>
    </>
  )
}

export default About









/*
  const navigate = useNavigate()

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type" : "application/json" 
        },
        credentials: "include"
      })

      const data = await res.json()
      console.log(data)
      setUserData(data)

      if(!res.status === 200) {
        const error = new Error(res.error)
        throw error
      }

    } catch (err) {
        console.log(err)
        navigate('/signin')
    }
  }

  useEffect(() => {
    callAboutPage()
  }, [])
  */

