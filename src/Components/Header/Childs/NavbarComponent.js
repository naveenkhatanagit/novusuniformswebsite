import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGetUserDetailsQuery } from '../../../app/services/auth/authService'
import { setCredentials } from '../../../Features/auth/authSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function NavbarComponent() {

    const { userInfo } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
  
    // automatically authenticate user if token is found
    const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
      pollingInterval: 900000, // 15mins
    })
  
    useEffect(() => {
      if (data) dispatch(setCredentials(data.data))
    }, [data, dispatch])
   

  return (
    <div>
        <nav id="nav-main">
        <div className="nav-left">
            <div className="nav-shop">
            <a className="nav-a" href="#">
                All Categories
                <i className="fa fa-caret-down" aria-hidden="true"></i>
            </a>
            </div>
        </div>
        <div className="nav-right">

            <NavLink className='nav-a' to='/login'>
            {isFetching
            ? `Fetching...`
            : userInfo !== null
            ? `Logged in as ${userInfo.name}`
            : "Login"}
            <i className="fa fa-caret-down" aria-hidden="true"></i>
            </NavLink>

            <a className="nav-a cart" href="#">
            <span>0</span>
            Cart
            </a>
        </div>
        <div className="nav-fill">
            <ul>
            <li><a href="#">Your Amazon.com</a></li>
            <li><a href="#">Today's Deals</a></li>
            <li><a href="#">Gift Cards &amp; Registry</a></li>
            <li><a href="#">Sell</a></li>
            <li><a href="#">Help</a></li>
            </ul>
        </div>
        </nav>
    </div>
  )
}

export default NavbarComponent