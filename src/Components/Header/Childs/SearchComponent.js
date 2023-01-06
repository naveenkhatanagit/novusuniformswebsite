import React from 'react'

function SearchComponent() {
  return (
    <div>
        <div className="nav-fill">
        <div id="nav-search">
          <form>
            <div className="nav-left">
              <span className="nav-search-label">All</span>
              <i className="fa fa-caret-down" aria-hidden="true"></i>
              <select id="nav-search-select" defaultValue={'aps'}>
                <option defaultValue="aps">All Departments</option>
                <option defaultValue="alexa-skills">Alexa Skills</option>
                <option defaultValue="instant-video">Amazon Video</option>
                <option defaultValue="warehouse-deals">Amazon Warehouse Deals</option>
                <option defaultValue="appliances">Appliances</option>
                <option defaultValue="mobile-apps">Apps &amp; Games</option>
                <option defaultValue="arts-crafts">Arts, Crafts &amp; Sewing</option>
                <option defaultValue="automotive">Automotive Parts &amp; Accessories</option>
                <option defaultValue="baby-products">Baby</option>
                <option defaultValue="beauty">Beauty &amp; Personal Care</option>
                <option defaultValue="stripbooks">Books</option>
                <option defaultValue="popular">CDs &amp; Vinyl</option>
                <option defaultValue="mobile">Cell Phones &amp; Accessories</option>
                <option defaultValue="fashion">Clothing, Shoes &amp; Jewelry</option>
                <option defaultValue="fashion-womens">&nbsp;&nbsp;&nbsp;Women</option>
                <option defaultValue="fashion-mens">&nbsp;&nbsp;&nbsp;Men</option>
                <option defaultValue="fashion-girls">&nbsp;&nbsp;&nbsp;Girls</option>
                <option defaultValue="fashion-boys">&nbsp;&nbsp;&nbsp;Boys</option>
                <option defaultValue="fashion-baby">&nbsp;&nbsp;&nbsp;Baby</option>
                <option defaultValue="collectibles">Collectibles &amp; Fine Art</option>
                <option defaultValue="computers">Computers</option>
                <option defaultValue="courses">Courses</option>
                <option defaultValue="financial">Credit and Payment Cards</option>
                <option defaultValue="digital-music">Digital Music</option>
                <option defaultValue="electronics">Electronics</option>
                <option defaultValue="gift-cards">Gift Cards</option>
                <option defaultValue="grocery">Grocery &amp; Gourmet Food</option>
                <option defaultValue="handmade">Handmade</option>
                <option defaultValue="hpc">Health, Household &amp; Baby Care</option>
                <option defaultValue="local-services">Home &amp; Business Services</option>
                <option defaultValue="garden">Home &amp; Kitchen</option>
                <option defaultValue="industrial">Industrial &amp; Scientific</option>
                <option defaultValue="digital-text">Kindle Store</option>
                <option defaultValue="fashion-luggage">Luggage &amp; Travel Gear</option>
                <option defaultValue="luxury-beauty">Luxury Beauty</option>
                <option defaultValue="magazines">Magazine Subscriptions</option>
                <option defaultValue="movies-tv">Movies &amp; TV</option>
                <option defaultValue="mi">Musical Instruments</option>
                <option defaultValue="office-products">Office Products</option>
                <option defaultValue="lawngarden">Patio, Lawn &amp; Garden</option>
                <option defaultValue="pets">Pet Supplies</option>
                <option defaultValue="prime-exclusive">Prime Exclusive</option>
                <option defaultValue="pantry">Prime Pantry</option>
                <option defaultValue="software">Software</option>
                <option defaultValue="sporting">Sports &amp; Outdoors</option>
                <option defaultValue="tools">Tools &amp; Home Improvement</option>
                <option defaultValue="toys-and-games">Toys &amp; Games</option>
                <option defaultValue="vehicles">Vehicles</option>
                <option defaultValue="videogames">Video Games</option>
                <option defaultValue="wine">Wine</option>
              </select>
            </div>
            <div className="nav-right">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type="submit"/>
            </div>
            <div className="nav-fill">
              <input type="text" autoComplete="off"/>
            </div>
          </form>
        </div>
    </div>
    </div>
  )
}

export default SearchComponent
