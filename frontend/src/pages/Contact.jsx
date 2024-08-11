import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import './Contact.css'
import { useState } from "react";

function Contact(){
    const [showAlert,setShowAlert] = useState(false) ;
    const navigate = useNavigate();
   function handleOnSubmit(e){
        e.preventDefault();
         setShowAlert(true)
         setTimeout(() => {
            setShowAlert(false)
            navigate('/');
         }, 1500);
        
    }
    return(
        <div  className="contact-container">
            
            {showAlert && <div className="alert">
                Thank you for the feedback!
            </div> }

           <form action="/" method="post" className="form-container">
            <label for='fname' >First Name</label>
            <input type="text" id="fname" name="fname" placeholder="first name" />

            <label for="Lname">Last Name</label>
            <input type="text" id='lname' name="lname" placeholder="Last name" />
            
            <label htmlFor="review">Review</label>
            <textarea name="review" id="review" placeholder="plz give us a feedback!" ></textarea>

             <label htmlFor="rateus">Rate us!</label>
            <StarRating/>

            <button  className="contact-btn" onClick={handleOnSubmit} type="submit">Submit</button>

           </form>
           </div>
    )
}

export default Contact;