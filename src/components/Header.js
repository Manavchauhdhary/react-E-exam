import React from 'react'
import { ExamList1 } from './ExamList1'
import { Exams1 } from './Exams1'
import { Search } from './Search'

export const Header = () => {
  return (
    <> 
   <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
         <div className="col-md-6 p-5 mt-lg-5">
  <h1 className="display-5 animated fadeIn mb-4">Find A <span className="text-primary">Perfect Course & Exam</span> And evaluate your Self</h1>
  <p className="animated fadeIn mb-4 pb-2">It is a place where you find the perfect exam and evaluate your self and also tracking your Progress
  and improve your marks in  your fild</p>
  <a href className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
  </div>
  <div className="col-md-6 animated fadeIn">
   
              <img className="img-fluid" src="img/online-entrance-exam.png" alt />
            
  </div>
</div>

      

  <Search/>

    <ExamList1/>
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
 <Exams1/>


    </>
  )
}
