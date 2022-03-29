import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Addexam = () => {
   
   const [totalque, settotalque] = useState("")
   const [examname, setexamname] = useState("")
   const [status, setstatus] = useState("")
   const [subject, setsubject] = useState('')
   const [Course, setCourse] = useState([])

   var navigate = useNavigate()

   const getCourse = () =>{
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

   const addexamHandler  = (e) => {
    e.preventDefault()
    var data={
     examName: examname,
     totalQuestion: totalque,
     isActive: status,
     course: subject,
    }
    axios.post("http://localhost:3000/exams", data).then((res) => {
  //  alert("data add sucssesfully");
   console.log(res.data.data);
   navigate('/Exams')
 });
  }

   

  return (
    <div>
    
   <section className="vh-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: 25}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add exam</p>
                <form className="mx-1 mx-md-4" onSubmit={addexamHandler}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" onChange={(e) => setexamname(e.target.value)}/>
                      <label className="form-label" htmlFor="form3Example1c">Exam Name</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="number" id="form3Example3c" className="form-control" onChange={(e) => settotalque(e.target.value)} />
                      <label className="form-label" htmlFor="form3Example3c">Total Question</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                   
                   <div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="isActive" value='1'   onChange={(e) => setstatus(e.target.value)} />
                       <label className="form-check-label" htmlFor="isActive">Active</label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="isActive"  value='0'  onChange={(e) => setstatus(e.target.value)} />
                       <label className="form-check-label" htmlFor="isActive">In Active</label>
                     </div>
                          </div>
                          

                    </div>
                 </div>
                 <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="col-md-8 mb-8">
                     <div className="form-outline">
                      <div className="col-md-6 mb-6">
                        <select className="select  form-control-lg" onChange={(e) => setsubject(e.target.value)} >
                        <option value='#'>Select Course</option>
                          {
                            Course.map((course =>{
                              return(
                                <option value={course._id}>{course.courseName}</option>
                              )
                            }))
                          }
                        
                        
                        </select>
                         <label>select subject</label>
                      </div>
                      
                    </div>
                  </div>
                  </div>
                  
                  
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Add</button>
                  </div>
                </form>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}
