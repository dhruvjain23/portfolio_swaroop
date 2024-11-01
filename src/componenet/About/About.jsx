import React from 'react'
import './About.css'

import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import insta from '../../assets/logo/Insta.svg'
import behance from '../../assets/logo/behance.svg'
import linkedin from '../../assets/logo/linkedin.svg'
import unsplash from '../../assets/logo/unsplash.svg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>As a passionate photographer, I find beauty in the overlooked, the everyday, and the extraordinary. My work spans genres, from striking landscapes to intimate portraits, with a focus on natural light and compelling compositions. Through my lens, I strive to create moments that speak to the heart and linger in the mind.
                    </p>
                    <p>I am an Electronics Engineer studying in Hemvati Nandan Bahuguna Garhwal University.</p>
                </div>
                <div className="logos">
                    <a href="https://www.instagram.com/swaroop2sky" target="_blank"><img src={insta} alt="Instagram" className='hover:brightness-150 hover:-translate-y-0.5'/></a>

                    <a href="http://linkedin.com/in/Swaroop2sky" target="_blank"><img src={linkedin} alt="Linkedin" className='hover:brightness-150 hover:-translate-y-0.5' /></a>

                    <a href="https://behance.net/s2sme" target="_blank"><img src={behance} alt="Behance" className='hover:brightness-150  hover:-translate-y-0.5'/></a>

                    <a href="https://unsplash.com/@swaroop2sky/" target="_blank"><img src={unsplash} alt="Unsplash" className='hover:brightness-150 hover:-translate-y-0.5'/></a>
                </div>
            </div>
        </div>
        <div className="about-achievments">
            <div className="about-achievment ">
                <h1 className='font-bold text-5xl'>3+</h1>
                <p className='text-lg'>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievment">
                <h1 className='font-bold text-5xl'>10+</h1>
                <p className='text-lg'>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievment ">
                <h1 className='font-bold text-5xl'>2+</h1>
                <p className='text-lg'>AWARDS RECEIVED</p>
            </div>
        </div>
    </div>
  )
}

export default About
