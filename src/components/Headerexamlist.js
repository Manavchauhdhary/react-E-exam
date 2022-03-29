import React from 'react'
import { Link } from 'react-router-dom'

export const Headerexamlist = () => {
  return (
    <div>
         {/* Header Start */}
  <div className="container-fluid header bg-white p-0">
    <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
      <div className="col-md-6 p-5 mt-lg-5">
        <h1 className="display-5 animated fadeIn mb-4">ExamList</h1> 
        <nav aria-label="breadcrumb animated fadeIn">
          <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item text-body active" aria-current="page">CourseList</li>
            <li className="breadcrumb-item text-body active" aria-current="page"><Link to ="/Course" className="btn btn-primary px-2 mx-2 d-none d-lg-flex">Add Course</Link></li>
          </ol>
        </nav>
      </div>
      <div className="col-md-6 animated fadeIn">
        <img className="img-fluid" src="img/online-entrance-exam.png" alt />
      </div>
    </div>
  </div>
  {/* Header End */}
    </div>
  )
}
