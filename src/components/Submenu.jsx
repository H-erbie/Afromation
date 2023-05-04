import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const Submenu = () => {
    const {submenu, location, page: {page, links}} = useGlobalContext();
    const container = useRef(null);
    useEffect(()=>{
         const submenu = container.current;
         const {center, bottom} = location;
         submenu.style.left = `${center}px`;
         submenu.style.top = `${bottom}px`;
    }, [location])  
  return (
    <aside className={`submenu ${submenu && 'show-submenu'}`} ref={container}>
        <h4>{page}</h4>
        <div className={`col-${links.length} grid`}>
            {
                links.map((link, index) => {
                    const {lable, icon, url} = link;
                    return<a href={url} key={index}><span>{icon}</span><span>{lable}</span> </a>
                })
            }
        </div>
        </aside>
  )
}

export default Submenu