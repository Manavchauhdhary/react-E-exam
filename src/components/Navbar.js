import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    
    <div className="container-fluid nav-bar bg-transparent">
    <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
      <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
        <div className="icon p-2 me-2">
          <img className="img-fluid" src="img/exam.png" alt="Icon" style={{width: 30, height: 30}} />
        </div>
    <h1 className="m-0 text-primary">E-Exam</h1>
  </a>
  <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto">
      <Link to="/" className="nav-item nav-link active">Home</Link>
      <Link to="/about" className="nav-item nav-link">About</Link>
      <Link to="/ExamList" className="nav-item nav-link">Course List</Link>
      <Link to="/Exams" className="nav-item nav-link">Exams</Link>
      {/* <Link to="/Addexam" className="nav-item nav-link">Add Exam</Link> */}
      
      {/* <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
        <div className="dropdown-menu rounded-0 m-0">
          <a href="property-list.html" className="dropdown-item">Property List</a>
          <a href="property-type.html" className="dropdown-item">Property Type</a>
          <a href="property-agent.html" className="dropdown-item">Property Agent</a>
        </div>
      </div> */}
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
        <div className="dropdown-menu rounded-0 m-0">
          <Link to="/Testimonial" className="dropdown-item">Testimonial</Link>
          <a href="404.html" className="dropdown-item">404 Error</a>
        </div>
      </div>
      <Link to="/Contact" className="nav-item nav-link">Contact</Link>
    </div>
    <Link to ="/Login" className="btn btn-primary px-2 mx-2 d-none d-lg-flex">Login</Link>
    <Link to ="/Signup" className="btn btn-primary px-2  mx-2 d-none d-lg-flex">SignUp</Link>
    <Link to ="/Logout" type='button' className="btn btn-primary px-2  mx-2 d-none d-lg-flex">Logout</Link>
  </div>
  
  
</nav>

    </div>
  )
}
