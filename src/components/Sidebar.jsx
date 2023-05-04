import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import { sublinks } from '../data'

const Sidebar = () => {
    const {sidebar, closeSidebar} = useGlobalContext();
  return (
    <aside className={`sidebar-overlay ${sidebar && 'show-sidebar'} `}>
        <div className="sidebar-container">
            <button className="btn close" onClick={closeSidebar}>
                <FaTimes/>
            </button>
            <div className="sidebar-links">
                {
                    sublinks.map((sublink, index) => {
                        const {links, page} = sublink;
                        return <article key={index}>
                            <h4>{page}</h4>
                            <div className="sidebar-sublinks">
                                {
                                    links.map((link, index) =>  {
                                        const {lable, icon, url} = link;
                                        return <a href={url} key={index}><span>{icon}</span><span>{lable}</span></a>
                                    })
                                }
                            </div>
                        </article>
                    })
                }
            </div>
        </div>
    </aside>
  )
}

export default Sidebar