import React, { useState } from 'react'
import './Navbar.css'
import menu_logo from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_logo from '../../assets/search.png'
import upload_logo from '../../assets/upload.png'
import more_logo from '../../assets/more.png'
import notification_logo from '../../assets/notification.png'
import profile_logo from '../../assets/jack.png'
import { Link } from 'react-router-dom'
import cross from '../../assets/cross.png'


const Navbar = ({setSidebar,fetchSearchData,inputData,setInputData}) => {
    const resetInput =()=>{
        setInputData('')
    }
  return (
    <nav className='nav-wrap'>
        <div className=" nav-left nav-container">
            <img src={menu_logo} className='menu' alt="" onClick={()=>setSidebar(pre=>pre===false?true:false)}/>
            <Link to={'/'}><img src={logo} alt="" className='logo'/></Link>
        </div>

        <div className="nav-middle nav-container">
            <div className="container">
                <input type="text" placeholder='Search...' value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
                {inputData.length>0?<img src={cross} alt="" className='cross' onClick={resetInput}/>:''}
                <img src={search_logo} alt="" onClick={fetchSearchData} />
            </div>
        </div>

        <div className="nav-right nav-container">
            <img src={upload_logo} alt="" />
            <img src={more_logo} alt="" />
            <img src={notification_logo} alt="" />
            <img src={profile_logo} className='profile-logo' alt="" />

        </div>
      
    </nav>
  )
}

export default Navbar
