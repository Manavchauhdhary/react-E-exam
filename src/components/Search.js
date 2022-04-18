import React from 'react'
import { useState } from 'react'

export const Search = () => {
    const [addcourse, setaddcourse] = useState([])
    const [addexam, setaddexam] = useState([])

    


  return (
    <div>
        {/* Search Start */}
  <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: 35}}>
    <div className="container">
      <div className="row g-2">
        <div className="col-md-10">
          <div className="row g-2">
            <div className="col-md-4">
              <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" />
            </div>
            <div className="col-md-4">
              <select className="form-select border-0 py-3" onChange={(e) => setaddcourse(e.target.value)}>
                <option selected>Property Type</option>
                {
                            addcourse.map((course) =>{
                              return(
                                <option value={course._id}>{course.courseName}</option>
                              )
                            })
                }
              </select>
            </div>
            <div className="col-md-4">
              <select className="form-select border-0 py-3" onChange={(e) => setaddexam(e.target.value)}>
                <option selected>Location</option>
                  {
                    addexam.map((exams) => {
                      return(
                        <option value={exams._id}>{exams.examName}</option>
                      )
                    })
                  }
                
                
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <button className="btn btn-dark border-0 w-100 py-3">Search</button>
        </div>
      </div>
    </div>
  </div>
  {/* Search End */}
    </div>
  )
}
