import React from 'react'

function HomepageComponent() {
  return (
    <div>
    <section id="promo">
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <div id="promo-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <img src={ process.env.PUBLIC_URL +'/img/slide_1.jpg' } />
                </div>
                <div className="item">
                    <img src={process.env.PUBLIC_URL +"/img/slide_2.jpg" }/>
                </div>
                <div className="item">
                    <img src={process.env.PUBLIC_URL +"/img/slide_3.jpg" }/>
                </div>
                <div className="item">
                    <img src={process.env.PUBLIC_URL +"/img/slide_4.jpg" }/>
                </div>
                <div className="item">
                    <img src={process.env.PUBLIC_URL +"/img/slide_5.jpg" }/>
                </div>
                <div className="item">
                    <img src={process.env.PUBLIC_URL +"/img/slide_6.jpg" }/>
                </div>
                <div className="item">
                    <img src={process.env.PUBLIC_URL +"/img/slide_7.jpg" }/>
                </div>
                </div>

                <a className="left carousel-control" href="#promo-carousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#promo-carousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
            </div>
        </div>
        </div>
    </section>
    </div>
  )
}

export default HomepageComponent