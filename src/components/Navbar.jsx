import React from 'react'
import { Links } from '../data'
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import logo from '../morty.jpg'
const Navbar = () => {
    const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();
    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = ((tempBtn.left + tempBtn.right) / 2) - 130;
        const bottom = tempBtn.bottom - 10;
        openSubmenu(page, {center, bottom});
    }   
    
    const handleSubmenu = (e) => {
        if(!e.target.classList.contains('link')){
            closeSubmenu()
        }
    } 

  return (
    <nav className='nav-container' onMouseOver={handleSubmenu}>
        <div className="app-Info">
            <div className="app-logo">
                <img src={logo} alt="logo" />
            </div>
            <h1 className="app-name">Afromation</h1>
        </div>
        <ul className="links">
            {
                Links.map((link) => {
                    const {id, icon, url, text} = link;
                    return <a href={url} key={id} onMouseOver={displaySubmenu}><li className='link'>{text}</li></a>
                })  
            }
        </ul>
        <button className="btn sign">Sign up</button>
        <button className="btn hamburger" onClick={openSidebar}>
            <FaBars/>
        </button>
    </nav>
  )
}

export default Navbar