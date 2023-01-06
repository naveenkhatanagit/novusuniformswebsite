import React from 'react'
import FooterComponent from '../Footer/FooterComponent'
import LogoComponent from './Childs/LogoComponent'
import NavbarComponent from './Childs/NavbarComponent'
import SearchComponent from './Childs/SearchComponent'


function HeaderComponent() {
  return (
    <div>
    <header>
        <a id="nav-top"></a>

        <div id="nav-belt">
        
            <LogoComponent/>

        <div className="nav-right">
            <div id="nav-holiday">
            <a href="#"></a>
            </div>
        </div>
        
            <SearchComponent/>
       
        </div>

        <NavbarComponent/>
    </header>


    </div>
  )
}

export default HeaderComponent