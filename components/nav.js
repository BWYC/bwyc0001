import React from 'react'

import PropTypes from 'prop-types'

const NavbarInteractive = (props) => {
  return (
    <>
      <div className="navbar-interactive-container">
        <header
          data-thq="thq-navbar"
          className="navbar-interactive-navbar-interactive"
        >
          <div className="navbar-interactive-branding">
            <img
              alt={props.Logo_alt}
              src={props.Logo_src}
              className="navbar-interactive-logo"
            />
            <span className="navbar-interactive-company">{props.Company}</span>
          </div>
          <div className="navbar-interactive-items">
            <a
              href="/"
              target="_blank"
              rel="noreferrer noopener"
              className="navbar-interactive-link"
            >
              <div className="navbar-interactive-links">
                <svg
                  viewBox="0 0 1024 1024"
                  className="navbar-interactive-icon"
                >
                  <path d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"></path>
                </svg>
                <span className="navbar-interactive-text nav-link">
                  {props.text}
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="navbar-interactive-icon02"
                >
                  <path d="M817.57 348.15c-193.566-143.858-260.266-259.018-305.566-348.148v0c-0.004 0-0.004-0.002-0.004-0.002v0.002c-45.296 89.13-112 204.292-305.566 348.148-330.036 245.286-19.376 587.668 253.758 399.224-17.796 116.93-78.53 202.172-140.208 238.882v37.744h384.032v-37.74c-61.682-36.708-122.41-121.954-140.212-238.884 273.136 188.446 583.8-153.94 253.766-399.226z"></path>
                </svg>
                <span className="navbar-interactive-text1 nav-link">
                  {props.text1}
                </span>
                <svg
                  viewBox="0 0 760.0274285714286 1024"
                  className="navbar-interactive-icon04"
                >
                  <path d="M666.857 365.714c7.429 76-24.571 121.714-74.857 147.429 83.429 20 136 69.714 125.714 181.143-13.143 138.857-116 176-263.429 184v145.714h-88v-143.429c-22.286 0-45.714 0-69.714-0.571v144h-88v-145.714c-20.571 0-41.143-0.571-62.286-0.571h-114.286l17.714-104.571c64.571 1.143 63.429 0 63.429 0 24.571 0 31.429-17.714 33.143-29.143v-229.714h9.143c-3.429-0.571-6.857-0.571-9.143-0.571v-164c-3.429-18.286-14.857-38.857-50.857-38.857 0 0 1.143-1.143-63.429 0v-93.714l121.143 0.571c17.714 0 36.571 0 55.429-0.571v-144h88v141.143c23.429-0.571 46.857-1.143 69.714-1.143v-140h88v144c113.143 9.714 202.857 44.571 212.571 148.571zM544 677.143c0-113.143-186.286-96.571-245.714-96.571v193.143c59.429 0 245.714 12.571 245.714-96.571zM503.429 405.143c0-103.429-155.429-88-205.143-88v175.429c49.714 0 205.143 11.429 205.143-87.429z"></path>
                </svg>
                <span className="navbar-interactive-text2 nav-link">
                  {props.text2}
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="navbar-interactive-icon06"
                >
                  <path d="M997.143 169.714c7.429 7.429 7.429 18.857 0 26.286l-80.571 80.571c-10.286 10.286-24.571 16-38.857 16h-768c-20 0-36.571-16.571-36.571-36.571v-146.286c0-20 16.571-36.571 36.571-36.571h329.143v-36.571c0-20 16.571-36.571 36.571-36.571h73.143c20 0 36.571 16.571 36.571 36.571v36.571h292.571c14.286 0 28.571 5.714 38.857 16zM438.857 694.857h146.286v292.571c0 20-16.571 36.571-36.571 36.571h-73.143c-20 0-36.571-16.571-36.571-36.571v-292.571zM914.286 438.857c20 0 36.571 16.571 36.571 36.571v146.286c0 20-16.571 36.571-36.571 36.571h-768c-14.286 0-28.571-5.714-38.857-16l-80.571-80.571c-7.429-7.429-7.429-18.857 0-26.286l80.571-80.571c10.286-10.286 24.571-16 38.857-16h292.571v-109.714h146.286v109.714h329.143z"></path>
                </svg>
                <span className="navbar-interactive-text3 nav-link">
                  {props.text3}
                </span>
              </div>
            </a>
            <button className="navbar-interactive-button start-button button">
              <span className="navbar-interactive-text4">{props.text4}</span>
            </button>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="navbar-interactive-burger-menu"
          >
            <button className="navbar-interactive-button1 button">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="navbar-interactive-image"
              />
              <span className="navbar-interactive-text5">{props.text5}</span>
            </button>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="navbar-interactive-mobile-menu"
          >
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="navbar-interactive-nav"
            >
              <div className="navbar-interactive-top">
                <div className="navbar-interactive-branding1">
                  <img
                    alt={props.Logo_alt1}
                    src={props.Logo_src1}
                    className="navbar-interactive-logo1"
                  />
                  <span className="navbar-interactive-company1">
                    {props.Company1}
                  </span>
                </div>
                <div
                  data-thq="thq-close-menu"
                  className="navbar-interactive-menu-close"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon08"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="navbar-interactive-items1">
                <div className="navbar-interactive-links1">
                  <a
                    href={props.link_text}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="navbar-interactive-link1 nav-link"
                  >
                    {props.text6}
                  </a>
                  <a href="#mint" className="navbar-interactive-link2 nav-link">
                    {props.text7}
                  </a>
                  <span className="nav-link">{props.text8}</span>
                  <span className="nav-link">{props.text9}</span>
                </div>
                <button className="start-button button navbar-interactive-button2">
                  <span className="navbar-interactive-text8">
                    {props.text10}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-interactive-container {
            display: flex;
            position: fixed;
          }
          .navbar-interactive-navbar-interactive {
            width: 90%;
            height: 130px;
            display: flex;
            position: fixed;
            max-width: 90%;
            margin-left: 5%;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            border-color: #ffffff;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-oneandhalfunits);
            backdrop-filter: blur(10px);
            justify-content: space-between;
            background-color: rgba(6, 6, 6, 0.17);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .navbar-interactive-branding {
            gap: var(--dl-space-space-halfunit);
            width: 513px;
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-interactive-logo {
            width: 134px;
            height: 90px;
            object-fit: cover;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-interactive-logo:hover {
            transform: rotate(360deg);
          }
          .navbar-interactive-company {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-interactive-items {
            gap: var(--dl-space-space-threeunits);
            width: 895px;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-interactive-link {
            display: contents;
          }
          .navbar-interactive-links {
            gap: var(--dl-space-space-threeunits);
            width: 508px;
            height: 27px;
            display: flex;
            align-items: center;
            flex-direction: row;
            text-decoration: none;
          }
          .navbar-interactive-icon {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .navbar-interactive-text {
            font-size: 15px;
            font-family: PT Mono;
            margin-left: -35px;
          }
          .navbar-interactive-icon02 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .navbar-interactive-text1 {
            font-size: 15px;
            font-family: PT Mono;
            margin-left: -35px;
          }
          .navbar-interactive-icon04 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .navbar-interactive-text2 {
            font-size: 15px;
            font-family: PT Mono;
            margin-left: -35px;
          }
          .navbar-interactive-icon06 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .navbar-interactive-text3 {
            font-size: 15px;
            font-family: PT Mono;
            margin-left: -35px;
          }
          .navbar-interactive-button {
            width: 217px;
            height: 66px;
            border-color: #ff8500;
            border-width: 1px;
            background-color: rgba(0, 0, 0, 0.6);
          }
          .navbar-interactive-text4 {
            color: #ffffff;
            font-style: normal;
            font-family: PT Mono;
            font-weight: 400;
          }
          .navbar-interactive-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .navbar-interactive-button1 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            padding-top: 20px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 20px;
            background-color: #235536;
          }
          .navbar-interactive-image {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .navbar-interactive-text5 {
            color: #ffffff;
            display: flex;
          }
          .navbar-interactive-mobile-menu {
            top: 204px;
            right: -1863px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateY(-100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #151515;
          }
          .navbar-interactive-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-interactive-branding1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-interactive-logo1 {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
          .navbar-interactive-company1 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-interactive-menu-close {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-interactive-icon08 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .navbar-interactive-items1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-links1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-interactive-link1 {
            text-decoration: none;
          }
          .navbar-interactive-link2 {
            text-decoration: none;
          }
          .navbar-interactive-text8 {
            color: #ffffff;
          }
          @media (max-width: 991px) {
            .navbar-interactive-navbar-interactive {
                width: 90%;
                height: 130px;
                display: flex;
                position: fixed;
                max-width: 90%;
                margin-left: 5%;
                align-items: center;
                padding-top: var(--dl-space-space-twounits);
                border-color: #ffffff;
                border-width: 1px;
                border-radius: var(--dl-radius-radius-radius8);
                padding-right: var(--dl-space-space-oneandhalfunits);
                backdrop-filter: blur(10px);
                justify-content: space-between;
                background-color: rgba(6, 6, 6, 0.17);
                border-top-width: 0px;
                border-left-width: 0px;
                border-right-width: 0px;
                border-bottom-width: 1px;
            }
            .navbar-interactive-branding {
              width: 149px;
            }
            .navbar-interactive-logo {
              width: 79px;
              height: 54px;
            }
            .navbar-interactive-company {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-family: PT Mono;
              font-weight: 500;
              margin-right: var(--dl-space-space-fourunits);
            }
            .navbar-interactive-items {
              width: 674px;
            }
            .navbar-interactive-links {
              width: 555px;
              height: 28px;
            }
            .navbar-interactive-button {
              width: 141px;
              height: 18px;
              font-size: 16px;
              text-align: center;
              border-color: #ffffff;
              border-width: 1px;
              padding-left: 5px;
              border-radius: var(--dl-radius-radius-radius4);
              padding-right: 4px;
            }
            .navbar-interactive-text4 {
              color: rgb(0, 0, 0);
              font-style: normal;
              font-family: PT Mono;
              font-weight: 500;
              line-height: 16px;
            }
            .navbar-interactive-button1 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .navbar-interactive-image {
              width: 18px;
              height: 18px;
              display: flex;
            }
            .navbar-interactive-text5 {
              display: none;
            }
            .navbar-interactive-mobile-menu {
              top: 5px;
              right: -1491px;
            }
            .navbar-interactive-logo1 {
              width: 115px;
              height: 80px;
            }
            .navbar-interactive-button2 {
              width: 100%;
              font-size: 16px;
              text-align: center;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .navbar-interactive-text8 {
              font-style: normal;
              font-weight: 500;
              line-height: 16px;
            }
          }
          @media (max-width: 767px) {
            .navbar-interactive-navbar-interactive {
              top: 13px;
              width: 678px;
              padding-top: var(--dl-space-space-oneandhalfunits);
              background-color: transparent;
            }
            .navbar-interactive-logo {
              width: 85px;
              height: 48px;
            }
            .navbar-interactive-company {
              font-size: 18px;
              line-height: 20px;
            }
            .navbar-interactive-items {
              display: none;
            }
            .navbar-interactive-burger-menu {
              display: flex;
            }
            .navbar-interactive-button1 {
              padding: 12px;
              background-color: #979a98;
            }
            .navbar-interactive-image {
              width: 14px;
              height: 14px;
            }
            .navbar-interactive-mobile-menu {
              top: -8px;
              right: -63px;
            }
          }
          @media (max-width: 479px) {
            .navbar-interactive-navbar-interactive {
                width: 90%;
                height: 130px;
                display: flex;
                position: fixed;
                max-width: 90%;
                margin-left: 3%;
                align-items: center;
                padding-top: var(--dl-space-space-twounits);
                border-color: #ffffff;
                border-width: 1px;
                border-radius: var(--dl-radius-radius-radius8);
                padding-right: var(--dl-space-space-oneandhalfunits);
                backdrop-filter: blur(10px);
                justify-content: space-between;
                background-color: rgba(6, 6, 6, 0.17);
                border-top-width: 0px;
                border-left-width: 0px;
                border-right-width: 0px;
                border-bottom-width: 1px;
            }
            .navbar-interactive-logo {
              width: 83px;
              height: 54px;
            }
            .navbar-interactive-company {
              font-family: Impact;
            }
            .navbar-interactive-button1 {
              background-color: #4e4e4e;
            }
            .navbar-interactive-mobile-menu {
              top: -40px;
              left: -15px;
              width: 387px;
              height: 679px;
              padding: 16px;
            }
            .navbar-interactive-top {
              width: 295px;
            }
            .navbar-interactive-logo1 {
              width: 91px;
              height: 55px;
            }
            .navbar-interactive-company1 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 500;
            }
            .navbar-interactive-link1 {
              text-decoration: none;
            }
            .navbar-interactive-link2 {
              text-decoration: none;
            }
            .navbar-interactive-button2 {
              color: var(--dl-color-gray-black);
              border-color: #ffffff;
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius8);
              background-color: rgba(208, 205, 203, 0.97);
            }
            .navbar-interactive-text8 {
              color: rgb(0, 0, 0);
            }
          }
        `}
      </style>
    </>
  )
}

NavbarInteractive.defaultProps = {
  Logo_src: '/favicon-200h.png',
  Logo_alt: 'image',
  Company: 'BWYC',
  text: 'HOME',
  text1: 'WHALECARD',
  text2: 'ORDINALS\n',
  text3: 'ROADMAP',
  text4: 'CONNECT',
  image_src: '/hamburger.svg',
  image_alt: 'image',
  text5: 'Start a project',
  Logo_src1: '/favicon-200h.png',
  Logo_alt1: 'image',
  Company1: 'BWYC',
  text6: '🪸HOME',
  link_text: '/',
  text7: '🎴WHALECARDS',
  text8: '📌ROADMAP',
  text9: '🎭ORDINALS',
  text10: 'CONNECT',
}

NavbarInteractive.propTypes = {
  Logo_src: PropTypes.string,
  Logo_alt: PropTypes.string,
  Company: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text5: PropTypes.string,
  Logo_src1: PropTypes.string,
  Logo_alt1: PropTypes.string,
  Company1: PropTypes.string,
  text6: PropTypes.string,
  link_text: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
}

export default NavbarInteractive
