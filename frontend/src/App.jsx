import React from 'react'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Writeblogs from './Pages/Writeblogs';


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/blogs' element={<Blogs/>} />
          <Route exact path='/writeBlogs' element={<Writeblogs/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
