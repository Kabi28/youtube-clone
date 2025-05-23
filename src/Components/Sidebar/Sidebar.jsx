import React from 'react'
import home_logo from '../../assets/home.png'
import game from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
import './Sidebar.css'

const Sidebar = ({sidebar,category,setCategory,setSearch}) => {
    function resetSearch(){
        setSearch('')
    }

  return (
    <div className={`slide-wrap ${sidebar?"":"small-bar"}`}>
        <div className="slide-container">
            <div className={`slide-links ${category === 0 ? 'active':''}`} onClick={()=>{setCategory(0),resetSearch()}}>
                <img src={home_logo} alt="" />
                <p>Home</p>
            </div>
            <div className={`slide-links ${category === 20 ? 'active':''}`} onClick={()=>{setCategory(20),resetSearch()}}>
                <img src={game} alt="" />
                <p>Game</p>
            </div>
            <div className={`slide-links ${category === 2 ? 'active':''}`} onClick={()=>{setCategory(2),resetSearch()}}>
                <img src={automobiles} alt="" />
                <p>Automobiles</p>
            </div>
            <div className={`slide-links ${category === 17 ? 'active':''}`} onClick={()=>{setCategory(17),resetSearch()}}>
                <img src={sports} alt="" />
                <p>Sports</p>
            </div>
            <div className={`slide-links ${category === 24 ? 'active':''}`} onClick={()=>{setCategory(24),resetSearch()}}>
                <img src={entertainment} alt="" />
                <p>Entertainment</p>
            </div>
            <div className={`slide-links ${category === 28 ? 'active':''}`} onClick={()=>{setCategory(28),resetSearch()}}>
                <img src={tech} alt="" />
                <p>Tech</p>
            </div>
            <div className={`slide-links ${category === 10 ? 'active':''}`} onClick={()=>{setCategory(10),resetSearch()}}>
                <img src={music} alt="" />
                <p>Music</p>
            </div>
            <div className={`slide-links ${category === 22 ? 'active':''}`} onClick={()=>{setCategory(22),resetSearch()}}>
                <img src={blogs} alt="" />
                <p>Blogs</p>
            </div>
            <div className={`slide-links ${category === 25 ? 'active':''}`} onClick={()=>{setCategory(25),resetSearch()}}>
                <img src={news} alt="" />
                <p>News</p>
            </div>
            
        </div>
        <hr />
        <div className="sub-container">
            <h3>Subscribed</h3>
            <div className="sub-links">
                <img src={jack} alt="" />
                <p>Tech with Tim</p>
            </div>
            <div className="sub-links">
                <img src={simon} alt="" />
                <p>MG squad</p>
            </div>
            <div className="sub-links">
                <img src={tom} alt="" />
                <p>A2D</p>
            </div>
            <div className="sub-links">
                <img src={megan} alt="" />
                <p>Great Stack</p>
            </div>
            <div className="sub-links">
                <img src={cameron} alt="" />
                <p>Polimer</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
