import React from 'react'
import { BsLinkedin } from 'react-icons/bs' 
import { SiLeetcode } from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const Headersocials = () => {
  return (
      <div className='header__socials'>
          <a href='https://www.linkedin.com/in/nividshah' target="_blank"><BsLinkedin /></a>
          <a href='https://github.com/nividshahSOF' target="_blank"><BsGithub /></a>
          <a href='https://www.nividshah.ca/' target="_blank">Portfolio</a>
    </div>
  )
}

export default Headersocials