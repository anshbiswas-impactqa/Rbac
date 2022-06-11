import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
        <div id='not-found'>
            <div className='not-found'>
                <div className='not-found-404'>
                    <h1>404</h1>
                </div>
                <h2>We are sorry, page not found!</h2>
                <p className='mb-5'>
                    The page you are looking for might have been removed or its name changed or is temporarily unavailable.
                </p>
                <Link to='/'>Back to Homepage</Link>
            </div>
        </div>
    </>
  )
}

export default ErrorPage