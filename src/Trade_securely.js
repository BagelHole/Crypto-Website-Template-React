import React from "react";
import MetaMask from "./images/metamask.svg";
import BNB from "./images/bnb.svg";
import Pancake from "./images/pancake.svg";
import SwapECAT from "./images/bnb-cat.svg";
import ChevronRight from "./images/chevron-right.svg";

class Trade_securely extends React.Component {
  render() {
    return (
      <section className="trade-securely">
        <h2 className="text--primary text-howBuy" id='buyLink'>
          Buy ECAT
        </h2>

        <div className="uniswap-widge">
        <iframe
            src="https://poocoin.app/embed-swap?outputCurrency=0xBCb3b42D9A8Ec2EA47982418a3506231A6B67Af9"
            width="340"
            height="500"
            title="Buy ECAT"
          ></iframe>
        </div>

        <h3 className="text--primary text-howBuy"> Or </h3>
        <div className="road-body">
        <div className="card card--secondary">
          <div className="currency-icon">
            <img alt="MetaMask" src={MetaMask}/>
          </div>
          <div className="card__header">
            <h3>Create MetaMask Wallet</h3>
          </div>
          <p className="text text-small text--regular card__text">
          Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. This wallet will allow you to buy, sell, send, and receive ECAT.
          </p>
          <a href="https://metamask.io/" nofollow="true" target="_blank" rel="noreferrer">
          <button className="btn btn--flex btn--accent">
            <span className="text--standart text--medium text-bold">Create Wallet</span>
            <div className="chiron-icon-container">
              <img src={ChevronRight} alt="Right Icon" />
            </div>
          </button>
          </a>
        </div>
        <div className="card card--white">
          <div className="currency-icon">
            <img alt="BNB" src={BNB} />
          </div>
          <div className="card__header">
            <h3>Send BNB to your wallet</h3>
          </div>
          <p className="text text-small text--regular card__text">
          You can buy BNB directly from exchanges like Binance, or a DEX. Make sure to use the BNB network when transferring BNB.
          </p>
        </div>
        <div className="card card--white">
          <div className="currency-icon">
            <img alt="PanCake" src={Pancake} />
          </div>
          <div className="card__header">
            <h3>Connect your wallet to PancakeSwap</h3>
          </div>
          <p className="text text-small text--regular card__text">
          Swap, earn, and build on the leading decentralized crypto trading protocol. PancakeSwap will allow you to buy ECAT.
          </p>
          <a href="https://pancakeswap.finance/" nofollow="true" target="_blank" rel="noreferrer">
          <button className="btn btn--flex btn--accent">
            <span className="text--standart text--medium text-bold">PancakeSwap</span>
            <div className="chiron-icon-container">
              <img src={ChevronRight} alt="Right Icon" />
            </div>
          </button>
          </a>
        </div>
        <div className="card card--white">
          <div className="currency-icon2">
            <img alt="SwapECAT" src={SwapECAT} />
          </div>
          <div className="card__header">
            <h3>Swap BNB for ECAT</h3>
          </div>
          <p className="text text-small text--regular card__text">
          You can start swapping as soon as you have BNB available! Press ‘Select a token’ and enter the token address or search for it on the tokens list.
          </p>
          <button className="btn btn--flex btn--accent">
            <span className="text--standart text--medium text-bold">ECAT Token</span>
            <div className="chiron-icon-container">
              <img src={ChevronRight} alt="Right Icon" />
            </div>
          </button>
        </div>
      </div>

      </section>
    );
  }
}

export default Trade_securely;
