import React, { useState } from 'react'
import Navbar from './Components/Navbart/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './pages/Home/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Video from './pages/Video/Video'

const App = () => {
  const [sidebar,setSidebar] = useState(false)
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
        <Routes>
          <Route path='/' element={<Home sidebar={sidebar}/>}/>
          <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
        </Routes>
    </div>
  )
}

export default App
