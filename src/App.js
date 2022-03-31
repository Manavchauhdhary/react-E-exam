
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import {Routes ,Route} from 'react-router-dom'
import { Signup } from './components/Signup';
import { About } from './components/About';
import { Testimonial } from './components/Testimonial';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Exams } from './components/Exams';
import {ExamList } from './components/ExamList';
import { Addexam } from './components/Addexam';
import { Course } from './components/Course';
import { UpdateExam } from './components/UpdateExam';
import { Logout } from './components/Logout';
import { createContext } from 'react';
import { initialState,reducer } from './reducer/UseReducer';
import { useReducer } from 'react';
import { ExamsOfCourse } from './components/ExamsOfCourse';


  export const UserContext = createContext()
function App() {
    
   const [state, dispatch] = useReducer(reducer, initialState)

  return (
    
    <>
    <UserContext.Provider value={{state, dispatch}}>
      <Navbar/>
      
     
    
      
      
     
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path='/Signup' element={<Signup/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/ExamList' element={<ExamList/>}/>
         <Route path='/Testimonial' element={<Testimonial/>}/>
         <Route path='/Contact' element={<Contact/>}/>
         <Route path='/Exams' element={<Exams/>}/>
         <Route path='/Addexam' element={<Addexam/>}/>
         <Route path='/Course' element={<Course/>}/>
         <Route path='/exams/:examId' element={<UpdateExam/>}/>
         <Route path='/Logout' element={<Logout/>}/>
         <Route path='/Update' element={<UpdateExam/>}/>
         <Route path='/course/:courseId/exams' element={<ExamsOfCourse/>}/>
         

       </Routes>
        </UserContext.Provider> 
       <Footer/>
    </>
  );
}

export default App;
