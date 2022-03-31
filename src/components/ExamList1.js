import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const ExamList1 = () => {
    
  const [Course, setCourse] = useState([])

  const getCourse = () => {
    axios.get("http://localhost:3000/Courses").then(res => {
      console.log(res.data.data)
      setCourse(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getCourse();
  },[])
  return (
    <div>
        {/* Category Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">All type of Course list</h1>
        
      </div>
      <div className="row g-4">
      {
        Course.map((course =>{
          return(
       
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <Link className="cat-item d-block bg-light text-center rounded p-3" to={`/course/${course._id}/exams`}>
            <div className="rounded p-4">
              <div className="icon mb-3">
                <img className="img-fluid" src="img/icon-apartment.png" alt="Icon" />
              </div>
              <h6>{course.courseName}</h6>
              {/* <span>123 Properties</span> */}
            </div>
          </Link>
        </div>
        
       
       
        
       
            
        )
        }))
      }
        
      </div>
    </div>
  </div>
       
     
  {/* Category End */}
    </div>
  )
}
