import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Headersocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/nividshah' target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href='https://github.com/nividshahSOF' target="_blank" rel="noreferrer"><BsGithub /></a>
      <a href='https://www.nividshah.ca/' target="_blank" rel="noreferrer">Portfolio</a>
    </div>
  )
}

export default Headersocials