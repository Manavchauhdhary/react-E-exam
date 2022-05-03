import React from "react";
import { Link,NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Navbar = () => {
  let navigate = useNavigate();

  const Logout = () => {
    localStorage.clear();
    toast.success('log out sucessfull', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div className="container-fluid nav-bar bg-transparent">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center text-center"
        >
          <div className="icon p-2 me-2">
            <img
              className="img-fluid"
              src="/img/exam.png"
              alt="Icon"
              style={{ width: 30, height: 30 }}
            />
          </div>
          <h1 className="m-0 text-primary">
              E-exam
            </h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
          
            <NavLink to="/" activeClassName="nav-item nav-link active" className="nav-item nav-link">
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="nav-item nav-link active" className="nav-item nav-link">
              About
            </NavLink>
            <NavLink to="/ExamList" activeClassName="nav-item nav-link active" className="nav-item nav-link">
              Course List
            </NavLink>
            <NavLink to="/Exams" activeClassName="nav-item nav-link active" className="nav-item nav-link">
              Exams
            </NavLink>
            {/* <Link to="/Addexam" className="nav-item nav-link">Add Exam</Link> */}

            {/* <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
        <div className="dropdown-menu rounded-0 m-0">
          <a href="property-list.html" className="dropdown-item">Property List</a>
          <a href="property-type.html" className="dropdown-item">Property Type</a>
          <a href="property-agent.html" className="dropdown-item">Property Agent</a>
        </div>
      </div> */}
            {/* <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu rounded-0 m-0">
                <Link to="/Testimonial" className="dropdown-item">
                  Testimonial
                </Link>
                <a href="404.html" className="dropdown-item">
                  404 Error
                </a>
              </div>
            </div> */}
            <NavLink to="/Contact" activeClassName="nav-item nav-link active" className="nav-item nav-link">
              Contact
            </NavLink>
          </div>
          {localStorage.getItem("email") == null ? (
            <>
              <Link
                to="/Login"
                className="btn btn-primary px-2 mx-2 d-none d-lg-flex"
              >
                Login
              </Link>
              <Link
                to="/Signup"
                className="btn btn-primary px-2  mx-2 d-none d-lg-flex"
              >
                SignUp
              </Link>
            </>
          ) :<><Link to={`/profile/${localStorage.getItem('userId')}`}>
                    <div className="icon p-2 me-2">
                        <img className="img-fluid" src='/img/kyc.png' alt="Icon" style={{ width: "30px", height: "30px" }} />
                        {localStorage.getItem('firstName')}
                    </div>
                    </Link> 
          <Link to="/" onClick={Logout} type="button"className="btn btn-primary px-2  mx-2 d-none d-lg-flex">Logout</Link>
            
          </> }
          
        </div>
        <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
      </nav>
    </div>
  );
};
