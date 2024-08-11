import { React, useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './StarRating.css'

function StarRating() {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment,setComment] = useState('rate Us!');
  const rateUs = ['worst','bad','good','very good','excellent','awesome','super Awesome']

  function handleHover(CurrentIndex){
     setHover(CurrentIndex);
     setComment(rateUs[CurrentIndex-1]);
  }

  function handleClick(CurrentIndex){
     setRating(CurrentIndex)
     setComment(rateUs[CurrentIndex-1]);
  }

  function handleMouseLeave(){
    setHover(rating)
    if(rating == 0){
      setComment('rateUs');
    }else{
      setComment(rateUs[rating-1]);
    }
   
  }

  return (
    <div className="container">

      <div className="stars">
        {
             [1,2,3,4,5,6,7].map((star)=>(
              <FaStar
                key={star}
                className={star<=(hover || rating)?'star-active':'star-inactive'}
                onClick={()=>handleClick(star)}
                onMouseMove={()=>handleHover(star)}
                onMouseLeave={()=>handleMouseLeave(star)}
                size={40}
              />

             ))
        }
       
      </div>

      <div className="Rateus">
      <h3>{comment}</h3>
      </div>
     
    </div>
  )
}

export default StarRating;