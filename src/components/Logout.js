import React, { useEffect } from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const Logout = () => {

  let navigate = useNavigate()

  

  // const {state,dispatch} = useContext(UserContext)
     useEffect(() => {
      localStorage.clear();
      setTimeout(() => {
        navigate('/')
      },2000);
       
     }, [])
     
    
    // localStorage.clear();
    // setTimeout(() => {
    //   navigate('/')
    // },2000);


  

    // dispatch({type:'user' ,payload:false})
  return (
    <div>
        
    </div>
  )
  }
