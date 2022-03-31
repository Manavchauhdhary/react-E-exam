import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'

export const Testimonial = () => {
  return (
    <div>
      <div className="container-xxl bg-white p-0">
 
 
   {/* Header Start */}
   <div className="container-fluid header bg-white p-0">
    <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
      <div className="col-md-6 p-5 mt-lg-5">
        <h1 className="display-5 animated fadeIn mb-4">Testimonial</h1> 
        <nav aria-label="breadcrumb animated fadeIn">
          <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item text-body active" aria-current="page">Testimonial</li>
          </ol>
        </nav>
      </div>
      <div className="col-md-6 animated fadeIn">
        <img className="img-fluid" src="img/online-entrance-exam.png" alt />
      </div>
    </div>
  </div>
  {/* Header End */}
 <Search/>
  {/* Testimonial Start */}
  <div className="container-xxl py-5">
  <div className="container">
    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600, visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
      <h1 className="mb-3">Our Clients Say!</h1>
      <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
    </div>
    <div className="owl-carousel testimonial-carousel wow fadeInUp owl-loaded owl-drag" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
      <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-1776px, 0px, 0px)', transition: 'all 0s ease 0s', width: 4145}}><div className="owl-item cloned" style={{width: '568.005px', marginRight: 24}}><div className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" style={{width: 45, height: 45}} />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div></div><div className="owl-item cloned" style={{width: '568.005px', marginRight: 24}}><div className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" style={{width: 45, height: 45}} />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div></div><div className="owl-item" style={{width: '568.005px', marginRight: 24}}><div className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" style={{width: 45, height: 45}} />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div></div><div className="owl-item active" style={{width: '568.005px', marginRight: 24}}><div className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" style={{width: 45, height: 45}} />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div></div><div className="owl-item" style={{width: '568.005px', marginRight: 24}}><div className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" style={{width: 45, height: 45}} />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div></div><div className="owl-item cloned" style={{width: '568.005px', marginRight: 24}}><div className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" style={{width: 45, height: 45}} />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div></div><div className="owl-item cloned" style={{width: '568.005px', marginRight: 24}}><div className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" style={{width: 45, height: 45}} />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div></div></div></div><div className="owl-nav"><div className="owl-prev"><i className="bi bi-arrow-left" /></div><div className="owl-next"><i className="bi bi-arrow-right" /></div></div><div className="owl-dots disabled" /></div>
  </div>
</div>

  {/* Testimonial End */}
   
  </div>

    </div>
  )
}
