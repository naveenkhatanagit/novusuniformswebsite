import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../Actions/authActions'
import Error from '../../Components/Error'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const LoginPage = () => {

  const { loading, userInfo, error } = useSelector((state) => state)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }

  return (
    <div>
        <div className="container-fluid">
        {error && <Error>{error}</Error>}
        <form onSubmit={handleSubmit(submitForm)}>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" {...register('email')} />
                  <label className="form-label" >Email address</label>
                </div>

          
                <div className="form-outline mb-3">
                  <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" {...register('password')} />
                  <label className="form-label" >Password</label>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
      
                     <button type='submit' className='btn btn-primary btn-lg' disabled={loading}>
                     {loading ? 'fff' : 'Login'}
                    </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                      className="link-danger">Register</a></p>
                </div>

        </form>
      
        </div>
 
    </div>
  )
}

export default LoginPage