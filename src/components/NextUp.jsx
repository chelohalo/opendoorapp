import React from 'react'
import progressBar from '../icons/progressBar.svg'

const NextUp = () => {
  return (
    <div className='body__nextup'>
      <div className='body__nextup__head'>
        <h3>Next Up</h3>
        <p>Show us your home</p>
      </div>
      <img src={progressBar} alt="progressBar" className='body__nextup__progressbar' />
      <div className='body__nextup__footer'>
        
      </div>
    </div>
  )
}

export default NextUp