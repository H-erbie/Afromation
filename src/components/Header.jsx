import React from 'react'
import { useGlobalContext } from '../context'

const Header = () => {
    const {closeSubmenu} = useGlobalContext();
  return (
    <div className='header-container' onMouseOver={closeSubmenu}>
        <div className="header-overlay">
            <div className="company-info">
               <h2>Animate with us🚀</h2> 
               <p>Bringing to life the stories and experiences of Africa</p>
            </div>
            <div className="buttons">
                <div className="btns">
                <button className="btn header-btn rel">Releases</button>
                <button className="btn header-btn dwn">Download software</button>
                <button className="btn header-btn par">Partner with us</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header