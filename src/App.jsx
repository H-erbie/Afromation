import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Submenu from './components/Submenu'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Submenu/>
      <Sidebar/>
      <main>
        <Header/>
      </main>
      
    </div>
  )
}

export default App
