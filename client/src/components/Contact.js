import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='contact-info'>
        <div className='container-fluid'>
          <div className='even-columns'>
            {/*phone number*/}
            <div className='col-lg-4 frame row'>
              <div className='contact-info-item d-flex justify-content-start align-items-center'>
                <img src='https://img.icons8.com/office/24/000000/android.png' alt='phone' />
                <div className='contact-info-content mx-2'>
                  <div className='contact-info-title'>
                    Phone
                  </div>
                  <div className='contact-info-text'>
                    +91 2365645645
                  </div>
                </div>
              </div>
            </div>
            {/*email*/}
            <div className='col-lg-4 frame row'>
              <div className='contact-info-item d-flex justify-content-start align-items-center'>
                <img src='https://img.icons8.com/office/24/000000/email.png' alt='phone' />
                <div className='contact-info-content mx-2'>
                  <div className='contact-info-title'>
                    Email
                  </div>
                  <div className='contact-info-text'>
                    ansh@gmail.com
                  </div>
                </div>
              </div>
            </div>
            {/*address*/}
            <div className='col-lg-4 frame row'>
              <div className='contact-info-item d-flex justify-content-start align-items-center'>
                <img src='https://img.icons8.com/office/24/000000/address.png' alt='phone' />
                <div className='contact-info-content mx-2'>
                  <div className='contact-info-title'>
                    Address
                  </div>
                  <div className='contact-info-text'>
                    Ghaziabad, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Contact us from*/}
      <div className='contact-form py-5'>
        <div className='container mt-5'>
          <div className='frame row'>
            <div className='col-lg-12'>
              <div className='contact-form-container py-3'>
                <div className='contact-form-title'>
                  <h2>Get in Touch</h2>
                </div>
                <form id='contact-form'>
                  <div className='contact-form-items d-flex'>
                    <input type='text' id='contact-form-name' className='contact-form-name input-field'
                    placeholder=' Your name' required={true} />
                    <input type='text' id='contact-form-name' className='contact-form-name input-field'
                    placeholder=' Your phone number' required={true} />
                    <input type='text' id='contact-form-name' className='contact-form-name input-field'
                    placeholder=' Your email' required={true} />
                  </div>

                  <div className='contact-text-field mt-4'>
                    <textarea className='form-control' rows={8}
                    placeholder='Message'></textarea>
                  </div>

                  <div className='contact-form-button mt-3'>
                    <button type='submit' className='form-submit'>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact