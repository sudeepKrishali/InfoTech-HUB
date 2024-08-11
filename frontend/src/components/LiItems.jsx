import React from 'react'

function LiItems({topic,list}) {
  return (
      <div className='liitem'>
        <h2>{topic}</h2>
        {list.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
    </div>
  )
}

export default LiItems
