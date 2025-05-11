import React, { useState } from 'react'
import Navbar from './Components/Navbart/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './pages/Home/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Video from './pages/Video/Video'
import { API_KEY } from './data'

const App = () => {
  const [sidebar,setSidebar] = useState(false);
  const [search,setSearch] = useState([]);
  const [inputData,setInputData] = useState('');

  const fetchSearchData =()=>{
          const SearchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${inputData?inputData:'trending'}&key=${API_KEY}`
          fetch(SearchUrl).then(response=>response.json()).then(data=>setSearch(data.items));
      }

  return (
    <div>
      <Navbar setSidebar={setSidebar} fetchSearchData={fetchSearchData} inputData={inputData} setInputData={setInputData}/>
        <Routes>
          <Route path='/' element={<Home sidebar={sidebar} search={search} setSearch={setSearch}/>} />
          <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
        </Routes>
    </div>
  )
}

export default App
