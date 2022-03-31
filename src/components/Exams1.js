import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search } from './Search'


export const Exams1 = () => {
  const [exams, setexams] = useState([])
  


  const getExam = () => {
    axios.get("http://localhost:3000/Exams").then(res => {
      console.log(res.data.data)
      setexams(res.data.data)
    }).catch(err => {
      console.log(err)
      
    })
  }

  useEffect(() => {
    getExam();
  },[])

  const deleteExam = (examId) =>{
    axios.delete(`http://localhost:3000/Exams/${examId}`).then(res=>{
        console.log(res.data.data)
    }).catch(err=>{
        console.log(err)
        
    })
}


  return (
    <div>
 
  {/* Property List Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-0 gx-5 align-items-end">
        <div className="col-lg-6">
          <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
            <h1 className="mb-3">ALL course exam</h1>
            <p>Select the particuler course exam and give the exam and evaluate your self .</p>
          </div>
        </div>
        {/* <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
          <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
            <li className="nav-item me-2">
              <a className="btn btn-outline-primary active" data-bs-toggle="pill" href="#tab-1">Featured</a>
            </li>
            <li className="nav-item me-2">
              <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">For Sell</a>
            </li>
            <li className="nav-item me-0">
              <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">For Rent</a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="tab-content">
        <div id="tab-1" className="tab-pane fade show p-0 active">
          <div className="row g-4">
          {
            exams.map((exam =>{
              return(
           
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href><img className="img-fluid" src="img/exam_image.jpg" alt /></a>
                  {/* <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3"> {exam.course.courseName}</div> */}
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{exam.course.courseName}</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3"></h5>
                  <a className="d-block h5 mb-2" href>{exam.examName}</a>
                  <p><i className="" />{exam.totalQuestion} Total Question</p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2"><i className="fas fa-badge-check" />{exam.course.courseName} </small>
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-pencil-square-o"/><Link to={`/exams/${exam._id}`}>Update exam</Link></small>
                  <small className="flex-fill text-center py-2"><i className="fas fa-cut" /><Link to='/Exams' onClick={(e)=>{deleteExam(exam._id)}}>Delete Exam</Link></small>
                </div>
              </div>
            </div>
                
            )
            }))
          }
            <div className="col-12 text-center">
              <a className="btn btn-primary py-3 px-5" href>Browse More Property</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Property List End */}
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
  
  

    </div>
  )
}
