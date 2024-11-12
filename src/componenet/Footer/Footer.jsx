import React from 'react'
import './Footer.css'

import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div id='footer'>
      <div className="footer">
        <div className="footer-top">
            <div className="footre-top-left">
                <p>Capturing life’s fleeting moments, one frame at a time.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" name="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Swaroop Kumar Yadav. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Terms of service</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
