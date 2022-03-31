import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const Signup = () => {
     const [FirstName, setFirstName] = useState("")
     const [LastName, setLastName] = useState("")
     const [UserName, setUserName] = useState("")
     const [password, setpassword] = useState("")
     const [repassword, setrepassword] = useState("")
     const [email, setemail] = useState("")
     const [mobileNumber, setmobileNumber] = useState("")
     const [gender, setgender] = useState("")
     const [DOB, setDOB] = useState("")
     const [education, seteducation] = useState("")
     const [address, setaddress] = useState("")
     const [role, setrole] = useState("")
     const [roleAdd, setroleAdd] = useState([])

     let navigate = useNavigate ()
     

     const submitHandler  = (e) => {
       e.preventDefault()
       var data={
        address: address,
        dateOfBirth: DOB,
        education: education,
        email: email,
        firstName: FirstName,
        gender: gender,
        lastName: LastName,
        userName: UserName,
        mobileNo: mobileNumber,
        password: password,
        role: role,
       }
       axios.post("http://localhost:3000/users", data).then((res) => {
      alert("data add sucssesfully");
      console.log(res);
      navigate('/login')
    });
     }

     const getrole = async () => {
       await axios.get('http://localhost:3000/roles').then((res)=>
       {
         setroleAdd(res.data.data)
         console.log(res.data.data)
       })
     }
     useEffect(() => {
      getrole()
    }, [])


     
  return (
    <div>
    <form onSubmit={submitHandler}>
  <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src="" alt="" className="img-fluid" style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem'}} />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Student registration form</h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m" className="form-control form-control-lg" onChange={(e) => setFirstName(e.target.value)} />
                      <label className="form-label" htmlFor="form3Example1m">First name</label>
                      {
                        FirstName.length > 0 && FirstName.length <3 ? "length greater than 3 character ":null }
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n" className="form-control form-control-lg" onChange={(e) => setLastName(e.target.value)} />
                      <label className="form-label" htmlFor="form3Example1n">Last name</label>
                      {LastName.length > 0 && LastName.length <3 ? "length greater than 3 character ":null }
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m1" className="form-control form-control-lg" onChange={ (e) => setUserName(e.target.value)} />
                      <label className="form-label" htmlFor="form3Example1m1">Username</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-6">
                    <div className="form-outline">
                    <div className="col-md-6 mb-6">
                    <select className="select  form-control-lg" onChange={(e) => setrole(e.target.value)} >
                    <option value="">Select Role</option>
                    {
                      roleAdd.map(roles =>{

                        return(
                          <option value={roles._id}>{roles.roleName}</option>)
                      })
                    }
                      
                      
                      
                      
                    </select>
                    <label>select role</label>
                   </div>
                      
                    </div>
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example8" className="form-control form-control-lg" onChange={(e) => setaddress(e.target.value)} />
                  <label className="form-label" htmlFor="form3Example8">Address</label>
                </div>
                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                  <h6 className="mb-0 me-4">Gender: </h6>
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" defaultValue="Female" onChange={(e) => setgender(e.target.value)} />
                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                  </div>
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" defaultValue="Male" onChange={(e) => setgender(e.target.value)} />
                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                  </div>
                  <div className="form-check form-check-inline mb-0">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" defaultValue="other" onChange={(e) => setgender(e.target.value)} />
                    <label className="form-check-label" htmlFor="otherGender">Other</label>
                  </div>
                </div>
               
                <div className="form-outline mb-4">
                  <input type="date" id="form3Example9" className="form-control form-control-lg" onChange={(e) => setDOB(e.target.value)}/>
                  <label className="form-label" htmlFor="form3Example9">DOB</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="tel"  id="form3Example90"  className="form-control form-control-lg" onChange={(e) => setmobileNumber(e.target.value)}/>
                  <label className="form-label" htmlFor="form3Example90">PhoneNo</label>
                  {mobileNumber.length <11 ? null:'not more than 10 char' }
                  
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example90"  className="form-control form-control-lg" onChange={(e) => setpassword(e.target.value)} />
                  <label className="form-label" htmlFor="form3Example90">Password</label>
                 
                  
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example90" className="form-control form-control-lg" onChange={(e) => setrepassword(e.target.value)} />
                  <label className="form-label" htmlFor="form3Example90">re-password</label>
                  
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example99" className="form-control form-control-lg" onChange={(e) => seteducation (e.target.value)}/>
                  <label className="form-label" htmlFor="form3Example99">Education</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example97" className="form-control form-control-lg"onChange={(e) => setemail(e.target.value)} />
                  <label className="form-label" htmlFor="form3Example97">Email ID</label>
                  
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg">Reset all</button>
                  <button type="submit" className="btn btn-warning btn-lg ms-2">Submit form</button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>

    </div>
  )
}
