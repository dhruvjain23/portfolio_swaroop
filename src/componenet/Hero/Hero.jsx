import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'am Swaroop Kumar Yadav</span> Street Photographer.</h1>
        <p>Capturing the heart of the streets through candid moments and raw expressions. I’ve spent over 3 years documenting life’s unscripted beauty one frame at a time.</p>
        <div className='hero-action'>
        <AnchorLink className='anchor-link' offset={50} href='#contact' ><div className="hero-connect">Connect with me</div></AnchorLink>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero
