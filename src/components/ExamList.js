import React from 'react'
import { Link } from 'react-router-dom'
import { ExamList1 } from './ExamList1'
import { Headerexamlist } from './Headerexamlist'
import { Search } from './Search'

export const ExamList = () => {
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
    <Headerexamlist/>
  <Search/>
  <ExamList1/>
  
 
</div>

    </div>
  )
}
