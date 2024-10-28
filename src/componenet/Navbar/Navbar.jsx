import React, { useRef, useState } from 'react'
import './Navbar.css'
import s2slogo from '../../assets/s2slogo.gif'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu]= useState('home');
  const menuRef = useRef();

  // const openMenu = ()=>{
  //   menuRef.current.style.right='0';
  // }

  // const closeMenu =()=>{
  //   menuRef.current.style.right='-350px';
  // }

  return (
    <div className='navbar'>
      <img src={s2slogo} alt="" />
      {/* <img src={menu_open} alt="" className='nav-mob-open' /> */}
      <ul /*ref={menuRef} onClick={openMenu}*/ className="nav-menu">
        {/* <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-clodse" /> */}
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==='home'?<img src={underline} alt=''/>:<></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About me</p></AnchorLink>{menu==='about'?<img src={underline} alt=''/>:<></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#carousel'><p onClick={()=>setMenu('gallery')}>Gallery</p></AnchorLink>{menu==='gallery'?<img src={underline} alt=''/>:<></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#home' ><p onClick={()=>setMenu('resume')}>Resume</p></AnchorLink>{menu==='resume'?<img src={underline} alt=''/>:<></>}</li>

        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu==='contact'?<img src={underline} alt=''/>:<></>}</li>
        
      </ul>
      <AnchorLink className='anchor-link' offset={50} href='#contact' ><div className="nav-connect">Connect with Me</div></AnchorLink>  
    </div>
  )
}

export default Navbar
