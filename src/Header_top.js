import React from "react";
import Logo from "./images/Coin-Logov2.svg";
import Twitter from "./images/twitter.svg";
import Telegram from "./images/telegram.svg";
import Swap from "./images/swap-white.svg";
import {Link as LinkR} from 'react-scroll';
import { Link } from "react-router-dom";

class Header_top extends React.Component {
  render() {
    return (
      <div className="header_top">
        <div className="logo">
          <embed src={Logo} alt="ECAT brand logo" />
          <span className="logo-topleft">ElonCatMoon</span>
        </div>
        <nav className="header-nav">
          <ul className="list list--inline">
          <LinkR to="teamLink" spy={true} smooth={true}><li className="list__item text text--small text--regular">
              Team
            </li></LinkR>
            <LinkR to="features" spy={true} smooth={true}><li className="list__item text text--small text--regular">
              Features
            </li></LinkR>
          </ul>
          <a href="https://twitter.com/ElonCatMoon" target="_blank" rel="noopener noreferrer">
          <form>
          <button className="btn btn--link text text--small text--medium" formaction="https://twitter.com/ElonCatMoon">
          <img className ="discord" alt="Twitter" src={Twitter}></img>
          </button></form></a>
          <a href="https://t.me/ElonCatMoon" target="_blank" rel="noopener noreferrer">
          <form>
          <button className="btn btn--link text text--small text--medium" formaction="https://t.me/ElonCatMoon">
          <img className ="discord" alt="Telegram" src={Telegram}></img>
          </button>
          </form></a>
            <Link to="dApp"><button className="btn btn--accent2 text--small text--medium btn-top-app">
              App
          </button></Link>
          <span className="vertical-line" />
          <a href="https://pancakeswap.finance/swap" target="_blank" rel="noopener noreferrer">
          <button className="btn btn--accent text--small text--medium btn-top-right">
            Swap <embed src={Swap} className="swap" alt="swap icon"></embed>
          </button>
          </a>
          <form>
          <button className="btn btn--link text text--small text--medium"  formaction="https://twitter.com/ElonCatMoon">
          <img className ="discord2" alt="Twitter" src={Twitter}></img>
          </button>
          </form>
          <form>
          <button className="btn btn--link text text--small text--medium" formaction="https://t.me/ElonCatMoon">
          <img className ="discord2" alt="Telegram" src={Telegram}></img>
          </button>
          </form>
        </nav>
      </div>
      
    );
  }
}
function dapp() {
  return <h2>dapp</h2>;
}
export default Header_top;
