import React from 'react'

function ParaItem({topic,para}) {
  return (
      <div className='paraitem'>
        <h2>{topic}</h2>
        <p>{para}</p>
      </div>
  )
}

export default ParaItem
