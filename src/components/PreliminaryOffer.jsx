import React from 'react'
import preliminaryOffer from '../icons/preliminaryOffer.svg'

const PreliminaryOffer = () => {
  return (
    <div className='body__preliminaryoffer'>
      <h4 className='body__preliminaryoffer__title'>Preliminary Offer</h4>
      <p className='body__preliminaryoffer__price'>$126,400</p>
      <div className='body__preliminaryoffer__box'>
        <img src={preliminaryOffer} alt='Preliminary'/>
        <div className='body__preliminaryoffer__box__text'>
          <p>Your offer range is $119K - $134K</p>
          <p>Many offers increase after we see your home</p>
        </div>
      </div>

    </div>
  )
}

export default PreliminaryOffer