import { Form, useLocation,useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { HelpContext } from "../context/HelpContext";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchInput,setSearchInput] = useState('');
  const {search,setSearch} = useContext(HelpContext)

  function handleSearchBtn(e){
            e.preventDefault()
           setSearch(searchInput);
           localStorage.setItem('searchItem',searchInput);
           navigate('/Info');
  }

   useEffect(()=>{
    if(localStorage.getItem('searchItem')){
      setSearch(localStorage.getItem('searchItem'));
   }
   },[])
 

  return (
    <div className="Navbar">
      <ul className="nav-ul">
        <li className="nav-list"><a className={location.pathname === '/' ? "active-link" : ""} href="/">Home</a></li>
        <li className="nav-list"><a className={location.pathname === '/About' ? "active-link" : ""} href="/About">About</a></li>
        <li className="nav-list"><a className={location.pathname === '/Contact' ? "active-link" : ""} href="/Contact">Contact</a></li>
      </ul>

     <form className="search">
     <input type="text" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} placeholder="search here" className="searchbar" />
     <button type="submit" onClick={handleSearchBtn} className="searchbtn">search</button>
     </form>
    </div>
  )
}

export default Navbar;