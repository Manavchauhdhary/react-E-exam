import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const UpdateExam = () => {   
     const examId= useParams().examId
     const [exam, setexam] = useState([])
     const [examname, setexamname] = useState('')
     const [totalque, settotalque] = useState('')
     const [status, setstatus] = useState("")
     const [Course, setCourse] = useState('')
     const [Courselist, setCourselist] = useState([])

     var navigate = useNavigate()

     const getExams = () =>{
      axios.get(`http://localhost:3000/exams/${examId}`).then(res => {
        console.log(res.data.data)
        setexam(res.data.data)
      }).catch(err => {
        console.log(err)
      })
    }

    useEffect(() => {
      getExams()
    }, [])

    const getcourse = async () => {
      await axios.get('http://localhost:3000/courses').then(res=> {
        console.log(res.data.data)
        setCourselist(res.data.data)
      })

    }

    useEffect(() => {
      getcourse()
    },[])

    const updateexamHandler  = (e) => {
      e.preventDefault()
      var data={
        examId:examId,
       examName: examname,
       totalQuestion: totalque,
       isActive: status,
       course: Course,
      }
      axios.put(`http://localhost:3000/exams/${examId}`, data).then((res) => {
     alert("data add sucssesfully");
     console.log(res.data.data);
     navigate('/Exams')
   }).catch(err=>{
     console.log(err)
   })
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
                <form className="mx-1 mx-md-4" onSubmit={updateexamHandler}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" defaultValue={exam.examName} onChange={(e) => setexamname(e.target.value)}/>
                      <label className="form-label" htmlFor="form3Example1c">Exam Name</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="number" id="form3Example3c" className="form-control" defaultValue={exam.totalQuestion} onChange={(e) => settotalque(e.target.value)} />
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
                        <select className="select  form-control-lg" defaultValue={exam.course} onChange={(e) => setCourse(e.target.value)} >
                        <option value='#'>Select Course</option>
                          {
                            Courselist.map((course) =>{
                              return(
                                <option value={course._id}>{course.courseName}</option>
                              )
                            })
                          }
                        
                        
                        </select>
                         <label>select subject</label>
                      </div>
                      
                    </div>
                  </div>
                  </div>
                  
                  
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">update exam</button>
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
