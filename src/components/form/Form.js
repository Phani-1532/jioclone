import React from 'react'
import './Form.css'

function Form() {
  return (
    <>
        <div className='form'>
            <div className='form-content'>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='email' id='name' placeholder='Enter your email address' />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='name' placeholder='Enter your password' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Form