import React from 'react'
import vector from '../icons/vector.svg'

const Impact = () => {
  return (
    <div className='body__impact'>
      <h3>What may impact your offer</h3>
      <div className='body__impact__selector'>
        <div className='body__impact__selector__market'>
          Market trends
          <img src={vector} alt="vector" />
        </div>
        <div className='body__impact__selector__home'>
          Home details
          <img src={vector} alt="vector" />
        </div>
      </div>
    </div>
  )
}

export default Impact