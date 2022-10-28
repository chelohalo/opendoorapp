import React from 'react'
import vector from '../icons/vector.svg'
import sellBuyClose from '../icons/sellBuyClose.svg'

const Impact = () => {
  return (
    <div className='body__impact'>
      <h3>What may impact your offer</h3>
      <div className='body__impact__selector'>
        <div className='body__impact__selector__options'>
          Market trends
          <img src={vector} alt="vector" />
        </div>
        <div className='body__impact__selector__options'>
          Home details
          <img src={vector} alt="vector" />
        </div>
      </div>
      <img src={sellBuyClose} alt="sellBuyClose" />
    </div>
  )
}

export default Impact