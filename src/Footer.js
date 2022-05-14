import React from "react";
import Logo from "./images/Coin-Logov2.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
      <div className="footer__top">
        <div className="footer__top__logo">
          <img src={Logo} alt="brand logo" />
          <span className="text text--medium">ElonCatMoon</span>
        </div>
      </div>        
      <div className="footer__bottom">
        <div className="footer__bottom__copyright text text--small text--regular">
          ©2022 ElonCatMoon. All rights reserved.
        </div>
        <div className="footer__bottom__social-media">
          <svg className="social-icon">
            <use xlinkHref="images/social-media-sprite.svg#facebook" />
          </svg>
          <svg className="social-icon">
            <use xlinkHref="images/social-media-sprite.svg#instagram" />
          </svg>
          <svg className="social-icon">
            <use xlinkHref="images/social-media-sprite.svg#youtube" />
          </svg>
          <svg className="social-icon">
            <use xlinkHref="images/social-media-sprite.svg#twitter" />
          </svg>
          <svg className="social-icon">
            <use xlinkHref="images/social-media-sprite.svg#linkedin" />
          </svg>
        </div>
      </div>
      </footer>
    );
  }
}

export default Footer;
