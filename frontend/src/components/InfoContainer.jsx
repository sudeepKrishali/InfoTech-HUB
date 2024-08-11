import React from 'react'
import LiItems from './LiItems'
import ParaItem from './ParaItem'


function InfoContainer({techData}) {
  
  return (
    
    <div className='info-container'>
      <h1>{techData.Name}</h1>

      {Object.keys(techData).slice(2,10).map((key,index)=>(
        Array.isArray(techData[key])?
        <LiItems key={index} topic={key} list={techData[key]}/>:
        <ParaItem key={index} topic={key} para={techData[key]}/>
      ))}

    </div>
  )
}

export default InfoContainer
