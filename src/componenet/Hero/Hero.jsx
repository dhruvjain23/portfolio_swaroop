import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'am Swaroop Kumar Yadav</span> MERN Stack developer.</h1>
        <p>I am MERN Stack developer from Jharkhand India, with working experience of 3 years</p>
        <div className='hero-action'>
        <AnchorLink className='anchor-link' offset={50} href='#contact' ><div className="hero-connect">Connect with me</div></AnchorLink>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero
