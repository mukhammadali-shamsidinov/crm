import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Company from './pages/Company'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import CreateCompany from './pages/CreateCompany'
import CreateUser from './pages/CreateUser'
import Users from './pages/Users'
import Main from './pages/Main'
import { useForm } from 'react-hook-form'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from './config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './pages/Modal'
import { collection, onSnapshot } from 'firebase/firestore'
export default function App() {
  const {handleSubmit,register,reset} = useForm()
  const [email,setEmail] = useState('')
  const navigate = useNavigate()
  const [files,setFiles] = useState([])
  const [task,setTask] = useState([])
  function login(data){
    console.log(data);
    signInWithEmailAndPassword(auth,data.email,data.password).then((user)=>{
      toast.success("Вы успешно зарегистрировались")
      setTimeout(()=>{
        navigate('/company')
      },3000)
      setEmail(user.user.email)

    }).catch(err=>{
      toast.error("Error")
    })
  }

  useEffect(()=>{
    onSnapshot(collection(db,"file"),(snapshot)=>{
      setFiles(snapshot.docs.map(doc=>({id:doc.id,...doc.data()})))
    })
    onSnapshot(collection(db,"user_task"),(snapshot)=>{
      setTask(snapshot.docs.map(doc=>({id:doc.id,...doc.data()})))
    })
   
  },[])
  return (
    <div>
 <ToastContainer />

      <Routes>
        <Route path='/' element={<Login form={handleSubmit} register={register} reset={reset} login={login} />} />

    <Route path='company/' element={<>
      <Header />
    <Sidebar />
    <Company files={files} task={task} />
    </>} />
    <Route path='create-company/' element={<>
      <Header />
    <Sidebar />
    <CreateCompany email={email} />
    </>} />
    <Route path='create-user/' element={<>
      <Header />
    <Sidebar />
    <CreateUser email={email} />
    </>} />
    <Route path='users/' element={<>
      <Header />
    <Sidebar />
    <Users />
    </>} />
    <Route path='main' element={<>
      <Header />
    <Sidebar />
    <Main />
    </>} />


      </Routes>

    </div>
  )
}
