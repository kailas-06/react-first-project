import React from 'react'
import {NavLink} from 'react-router-dom'

function Footer() {
  return (
    <div className='section-footer py-75 bg-black color-white'>
      <div className="container">
            <div className="footer-links pb-50">
                {/* using grid */}
                <div className="footer-sec">
                    <h5 className='heading5'>For Business</h5>
                    <div className="footer-wrap">
                        <NavLink href="/" className="footer-nav">Employer</NavLink>
                        <NavLink href="/" className="footer-nav">Idividual</NavLink>
                        <NavLink href="/" className="footer-nav">Health</NavLink>
                        <NavLink href="/" className="footer-nav">Education</NavLink>
                    </div>
                </div>
                <div className="footer-sec">
                    <h5 className='heading5'>Partners</h5>
                    <div className="footer-wrap">
                        <NavLink href="/" className="footer-nav">Testimonial</NavLink>
                        <NavLink href="/" className="footer-nav">STV</NavLink>
                        <NavLink href="/" className="footer-nav">React Foundation</NavLink>
                        <NavLink href="/" className="footer-nav">PT</NavLink>
                    </div>
                </div>
                <div className="footer-sec">
                    <h5 className='heading5'>Company</h5>
                    <div className="footer-wrap">
                        <NavLink href="/" className="footer-nav">About</NavLink>
                        <NavLink href="/" className="footer-nav">SGE</NavLink>
                        <NavLink href="/" className="footer-nav">Careers</NavLink>
                        <NavLink href="/" className="footer-nav">Newsroom</NavLink>
                    </div>
                </div>
            </div>
            <div className="footer-terms">
                <div className="f-copyRight">
                    <span>@2024 Company All rights reserved</span>
                </div>
                <div className="f-terms"></div>

            </div>
      </div>
    </div>
  )
}

export default Footer;
