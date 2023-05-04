import React, {useState, useContext} from 'react'
import { sublinks } from './data';

const AppContext = React.createContext()
const AppProvider = ({children}) => {

    const [sidebar, setSideBar] = useState(false);
    const [submenu, setSubmenu] = useState(false);
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page:'sage', links: []})
    
    const openSidebar = () => {
        setSideBar(true)
    }
    const closeSidebar = () => {
        setSideBar(false)
    }
    const openSubmenu = (text, cordinates) => {
         const txt = sublinks.find((link) => link.page === text);
         setPage(txt);
        setLocation(cordinates)
        setSubmenu(true)
    }
    const closeSubmenu = () => {
        setSubmenu(false)
    }
    return <AppContext.Provider value={{sidebar, page,  openSidebar, closeSidebar, submenu, openSubmenu, location, closeSubmenu}}>{children}</AppContext.Provider>
} 

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider}
