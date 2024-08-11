
import './App.css'

import Home from "./pages/Home"
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from "./components/Navbar"
import Info from "./pages/Info"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { HelpContext } from "./context/HelpContext"
import { useContext, useEffect } from "react"

function App() {
  const {search,setSearch} = useContext(HelpContext)

  return (
    <>
     
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<About/>} />
        <Route exact path='/Contact' element={<Contact/>} />
        <Route exact path="/Info" element={<Info tech={search} />}/>
      </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App

