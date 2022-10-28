import React from 'react'
import sellBuyClose from '../icons/sellBuyClose.svg'
import arrow from '../icons/arrow.svg'

const BuyAndClose = () => {
  return (
    <div className='buyandclose'>
      <div className='buyandcloseparent'>
        <img src={sellBuyClose} alt="sellBuyClose" />
        <h2>What it´s like to sell, buy, and close with ease</h2>
      </div>
      <img className="buyandclose__image" src={arrow} alt="" />
    </div>
  )
}




export default BuyAndClose