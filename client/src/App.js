import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <ul>
        <li> <Link to="/">Register</Link></li>
        <li> <Link to="/login">Login</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
      </Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App
