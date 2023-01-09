import React from 'react'
import { registerUser } from '../../Actions/authActions'
import Error from '../../Components/Error'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


function RegisterPage() {

  const { userInfo, error, success } = useSelector(
    (state) => state
  )
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate('/login')
    // redirect authenticated user to profile screen
    if (userInfo) navigate('/')
  }, [navigate, userInfo, success])

  const submitForm = (data) => {
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase()
    dispatch(registerUser(data))
  }


  return (
    <div>
       <form onSubmit={handleSubmit(submitForm)}>
      {error && <Error>{error}</Error>}
      <br/>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          className='form-input'
          {...register('name')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='form-input'
          {...register('email')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Phone</label>
        <input
          type='number'
          className='form-input'
          {...register('phone')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-input'
          {...register('password')}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='refer_code'>Refer code</label>
        <input
          type='text'
          className='form-input'
          {...register('refer_code')}
          
        />
      </div>
      
      <button type='submit' className='button'>
        Register
      </button>
    </form>
    </div>
  )
}

export default RegisterPage