import { useContext, useEffect } from "react"
import { HelpContext } from "../context/HelpContext"
import InfoContainer from "../components/InfoContainer";
import { useNavigate } from "react-router-dom";

function Info({tech}){
    
     const {data} = useContext(HelpContext);
     const navigate = useNavigate();

     function handleHomebtn(){
       localStorage.removeItem('searchItem');
       navigate('/');
     }

     return(
        <div>
        {data.some(item=>item.Name === tech)?
          <InfoContainer techData = {data.find(item=>item.Name == tech)} />
          :<div className="no-data">
            <h1>no data found</h1>
            <button onClick={handleHomebtn} className="home-btn">Home</button>
            </div>}
        </div>
     )
}

export default Info
