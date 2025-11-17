import React from 'react'
import './header.css'
import CTA from './CTA'
import NIVID from '../../assets/nivid1.PNG'
import Headersocials from './Headersocials'
import {MdWavingHand} from 'react-icons/md'

const Header = () => {
  return (
    <header id="home">
      <div className='container header__container'>
        <h4>Hello <span><MdWavingHand /></span> I'm</h4>
        <h1>Nivid Shah</h1>
        <h5 className='text-light'>Senior Software Developer</h5>
        <CTA />
        <Headersocials />

        <div className='nividImage'>
          <img src={NIVID} alt=''/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header