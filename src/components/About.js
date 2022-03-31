import React from 'react'
import { Link } from 'react-router-dom'
import { Headerabout } from './Headerabout'
import { Search } from './Search'

export const About = () => {
  return (
    <div>
<div className="container-xxl bg-white p-0">
  {/* Spinner Start */}
  {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
  {/* Spinner End */}
 
  <Headerabout/>
  <Search/>
  
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="about-img position-relative overflow-hidden p-5 pe-0">
            <img className="img-fluid w-100" src="img/about.png" />
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <h1 className="mb-4">#1 Place To Find The Perfect Exam</h1>
          <p className="mb-4">The eExam or test killer is a web-based platform used by educational institutes to conduct computer-based exams. All students need is a good internet connection and access to devices for taking objective and subjective assessments and tests</p>
          <p><i className="fa fa-check text-primary me-3" />Students’ Registration</p>
          <p><i className="fa fa-check text-primary me-3" />College faculties/admin / can create multiple-choice, test/quiz </p>
          <p><i className="fa fa-check text-primary me-3" />Take Tests Anytime, Anywhere</p>
          <p><i className="fa fa-check text-primary me-3" />Automated Evaluation</p>
          <p><i className="fa fa-check text-primary me-3" />Track Students’ Progress</p>
          <a className="btn btn-primary py-3 px-5 mt-3" href>Read More</a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Call to Action Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="bg-light rounded p-3">
        <div className="bg-white rounded p-4" style={{border: '1px dashed rgba(0, 185, 142, .3)'}}>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <img className="img-fluid rounded w-100" src="img/call-action.png" alt />
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="mb-4">
                <h1 className="mb-3">Contact With Our Certified Agent</h1>
                <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
              </div>
              <a href className="btn btn-primary py-3 px-4 me-2"><i className="fa fa-phone-alt me-2" />Make A Call</a>
              <a href className="btn btn-dark py-3 px-4"><i className="fa fa-calendar-alt me-2" />Get Appoinment</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Call to Action End */}
  {/* Team Start */}
  {/* <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">Our best faculty</h1>
        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item rounded overflow-hidden">
            <div className="position-relative">
              <img className="img-fluid" src="img/team-1.jpg" alt />
              <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center p-4 mt-3">
              <h5 className="fw-bold mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item rounded overflow-hidden">
            <div className="position-relative">
              <img className="img-fluid" src="img/team-2.jpg" alt />
              <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center p-4 mt-3">
              <h5 className="fw-bold mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item rounded overflow-hidden">
            <div className="position-relative">
              <img className="img-fluid" src="img/team-3.jpg" alt />
              <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center p-4 mt-3">
              <h5 className="fw-bold mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item rounded overflow-hidden">
            <div className="position-relative">
              <img className="img-fluid" src="img/team-4.jpg" alt />
              <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center p-4 mt-3">
              <h5 className="fw-bold mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* Team End */}
  
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>

    </div>
  )
}
