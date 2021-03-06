import React from 'react'

import { Link } from 'react-router-dom'

import logoKet from '../assets/logo.png'
import employPhoto from '../assets/employee.png'

import homeLogo from '../assets/homeLogo.svg'
import panelLogoPhone from '../assets/panelLogoPhone.svg'
import profileLogo from '../assets/profileLogo.svg'
import messageLogo from '../assets/messageLogo.svg'

export const SideMenu = () => {
  return (
    <div className="side-menu__container">
      <div className="side-menu__container--top">
        <a 
          href="http://www.kuepa.com/co"
          target="_blank"
          rel="noreferrer"
        >
          <img className="side-menu__container--logo" src={logoKet} alt="kuepa home"/>
        </a>
        <nav className="side-menu__container--nav">
          <Link to="/">
            <img src={homeLogo} alt="Home" />
          </Link>
          <Link to="/panel">
          <img src={panelLogoPhone} alt="Panel" />
          </Link>
          <Link to="/profile">
          <img src={profileLogo} alt="Profile" />
          </Link>
        </nav>
      </div>
      <div className="side-menu__container--bottom">
        <Link to="/mail">
          <img src={messageLogo} alt="Mail" />
        </Link>
        <img className="side-menu__container--bottom-emp" src={employPhoto} alt="profile" />

      </div>
    </div>
  )
}
