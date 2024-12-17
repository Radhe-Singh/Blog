import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import NewBlog from './components/NewBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/NewBlog' element={<NewBlog />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/Signup' element={<SignupPage />}/>
    </Routes>
   
    </BrowserRouter>
     
    </>
  )
}

export default App
