import React from 'react'

function NavbarComponent() {
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

            <a className="nav-a" href="#">
            <span>Hello. Sign in</span>
            Accounts &amp; Lists
            <i className="fa fa-caret-down" aria-hidden="true"></i>
            </a>

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