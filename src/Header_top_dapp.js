import React from "react";
import Logo from "./images/Coin-Logov2.svg";
import Twitter from "./images/twitter.svg";
import Telegram from "./images/telegram.svg";
import Swap from "./images/swap-white.svg";
import { Link } from "react-router-dom";

class Header_top extends React.Component {
  render() {
    return (
      <div className="header_dapp">
      <div className="header_top">
        <div className="logo">
          <embed src={Logo} alt="ECAT brand logo" />
          <span className="logo-topleft">ElonCatMoon</span>
        </div>
        <nav>
          <form>
          <button className="btn btn--link text text--small text--medium" formaction="https://twitter.com/ElonCatMoon">
          <img className ="discord" alt="Twitter" src={Twitter}></img>
          </button></form>
          <form>
          <button className="btn btn--link text text--small text--medium" formaction="https://t.me/ElonCatMoon">
          <img className ="discord" alt="Telegram" src={Telegram}></img>
          </button>
          </form>
            <Link to="../"><button className="btn btn--accent2 text--small text--medium btn-top-app">
              Home
          </button></Link>
          <span className="vertical-line" />
          <button className="btn btn--accent text--small text--medium btn-top-right">
            Swap <embed src={Swap} className="swap" alt="swap icon"></embed>
          </button>
          
        </nav>
      </div>
      </div>
    );
  }
}
export default Header_top;
