import React from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'

export const Logout = () => {

  // const {state,dispatch} = useContext(UserContext)

    localStorage.clear();

    

    // dispatch({type:'user' ,payload:false})
  return (
    <div>
        
    </div>
  )
}
