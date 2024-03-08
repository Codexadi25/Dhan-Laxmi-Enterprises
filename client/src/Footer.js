import React from 'react';
import './Footer.css';
// import logo from './academya-logo.png';
import MailIcon from '@mui/icons-material/Mail';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LaunchIcon from '@mui/icons-material/Launch';
import PhoneInTalk from '@mui/icons-material/PhoneInTalk';




function Footer() {

  return (
    <div className='footer'>
      <div className='footer__body'>
        <div className='footer__box'>
          <img src='' className='logo' alt='DhanLaxmiEnterprise-logo'/>
          <p className='tagline'>Dhan Laxmi Enterprises | A Kanpur-south based multi-business enterprise.</p>
        </div>
        <div className='footer__links'>
          <div className='sections'>
            <div className='heading'>
              Helpful Links
            </div>
            <a href='' target='__blank' className='links'>About Us</a>
            <a href='' target='__blank' className='links'>FAQs</a>
            <a href='' target='__blank' className='links'>Help & Support</a>
            <a href='' target='__blank' className='links'>Terms & Conditions</a>
          </div>
          <div className='sections'>
            <div className='heading'>
              Connect Us
            </div>
            <a href='https://www.instagram.com/' target='__blank' className='links ig'><InstagramIcon/>Instagram</a>
            <a href='' target='__blank' className='links fb'><FacebookIcon/>Facebook</a>
            <a href='https://wa.me/+91?text=HI!%20I%20want%20to%20know%20more%20about%20Dhan%20Laxmi%20Enterprises.' target='__blank' className='links wa'><WhatsAppIcon/>WhatsApp</a>
          </div>
          <div className='sections'>
            <div className='heading'>
              Reach Us
            </div>
            <a href='mailto:/.com' className='links mail'><MailIcon/>E-mail</a>
            <a href='https://wa.me/+91?text=HI!%20I%20want%20to%20know%20more%20about%20Dhan%20Laxmi%20Enterprises.' target='__blank' className='links wa'><WhatsAppIcon/>WhatsApp</a>
            <a href='tel:/+91' target='__blank' className='links tel'><PhoneInTalk/>+91 </a>
          </div>
          <div className='sections'>
            <div className='heading'>
              Businesses
            </div>
            <a href='' className='links'>Faxo India</a>
            <a href='' className='links'>Dhan Laxmi Enterprises</a> 
          </div>
          <div className='sections'>
            <span><div className='heading'>Career & Staffing</div>
              <a href='https://adityatechndevops.web.app' className='links' target='__blank' >Aditya Tech & Devops&nbsp;<LaunchIcon fontSize='14'/></a>
            </span>
          </div>
        </div>
      </div>
      <hr/>
      <p className='footer__bottomText'>By continuing this page, you agree to our Terms of Service, Cookie, Privacy, and Content Policies.
      All trademarks are properties of their respective owners.</p>
      <div className='footer__bottom'>
        
        <span>Copyright-2024 &copy; All rights reserved.</span>
        <span>
          <div id="google_translate_element"></div>
        </span>
        </div>
    </div>
  )
}

export default Footer