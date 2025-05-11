import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar,search,setSearch}) => {

  const [category,setCategory] = useState(0);

  return (
    <div>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} setSearch={setSearch}/>
      <div className={`feed ${sidebar?"":'big-feed'}`}>
          <Feed category={category} search={search}/>
      </div>
    </div>
  )
}

export default Home
