import React from 'react'
import Logo from './Logo'
import houseIcon from '../icons/house.svg'
import selling from '../icons/selling.svg'
import buying from '../icons/buying.svg'
import line from '../icons/line.svg'

const SideBar = () => {
  return (
    <div className='layout__sidebar'>
      <div>
        <div className='sidebar__logo'>
          <Logo/>
        </div>
        <div className='sidebar__items'>
       
          <div className='sidebar__item'>
            <img src={houseIcon} alt="" />
            <p>To do</p>
          </div>
          <div className='sidebar__item__selected'>
            <img src={selling} alt="" />
            <p>Selling</p>
          </div>
          <div className='sidebar__item'>
            <img src={buying} alt="" />
            <p>Buying</p>
          </div>
        </div>
      </div>
      <div className='sidebar__settings'>
        <p>Your account</p>
        <p>Settings</p>
      </div>
    </div>
  )
}

export default SideBar