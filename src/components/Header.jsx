import React from 'react'
import addContact from '../icons/addContact.svg'
import messageIcon from '../icons/messageIcon.svg'

const Header = () => {
  return (
    <div className='header'>
      <h2 className='header__title'>Selling</h2>
      <div className='header__center'>
        <p>Offer</p>
        <p>History</p>
      </div>
      <div className='header__contact'>
        <img src={addContact} alt="addContact" />
        <div className='header__contact__text'>
          <p>Need Help?</p>
          <p>Contact us</p>
        </div>
        <img src={messageIcon} alt="messageIcon" />
      </div>
    </div>
  )
}

export default Header