import './App.scss'
import Appbar from './Component/appbar/Appbar'
import Home from './Component/home/Home'
import About from './Component/about/About'
import Contact from './Component/contact/Contact'
import Projects from './Component/projects/Projects'
import Menu from './Component/menu/Menu'
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const removeActive = () => setMenuOpen(false)
  return (
    <div className="app">
      <Appbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} removeActive={removeActive}/>
      <div className="section">
        <Home removeActive={removeActive}/>
        <Projects removeActive={removeActive}/>
        <About removeActive={removeActive}/>
        <Contact removeActive={removeActive}/>
      </div>
        
    </div>
  ) 
}

export default App;