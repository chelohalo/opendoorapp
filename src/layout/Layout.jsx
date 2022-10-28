import React from 'react'
import Address from '../components/Address'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Notification from '../components/Notification'
import NextUp from '../components/NextUp'
import BuyAndClose from '../components/BuyAndClose'
import PreliminaryOffer from '../components/PreliminaryOffer'
import Impact from '../components/Impact'
const Layout = () => {
  return (
    <div className='layout'>
      <SideBar />
      <div className='layout__content'>
        <Header />
        <Address />
        <div className='layout__content__body'>
          <div className='body'>
            <Notification />
            <PreliminaryOffer/>
            <div className='wrapper'>
            <NextUp/>
            <Impact/>
            </div>
            <BuyAndClose/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout