import React from "react";
import {Link} from 'react-scroll';

class Grid_choose extends React.Component {
  render() {
    return (
      <div className="grid_choose">
        <div className="card_why">
        <div className="banner_grid">
          <h2 className="banner__title">Why you should buy ECAT Token</h2>
          
          <p className="banner__text text text--small text--regular text--muted why-text">
            Experience the next generation cryptocurrency Token. A community project that will transition into a Decentralized Autonomous Organization (DAO) using the ECAT Token for governance. No other Token rewards so aggressively for holding the Token. ECAT is a Fair Launch token with no future minting allowed. Join us to the Moon!

          </p>
          
          <ul className="whyList">
            <li className="nav__list__item_2 text text--small text--regular">Strong Dev Team with history in Start Ups</li>
            <li className="nav__list__item_2 text text--small text--regular">Holding certain amounts of ECAT during a Snapshot guarantees you airdrops of NFTs, Future Tokens, etc.</li>
            <li className="nav__list__item_2 text text--small text--regular">Set Supply with no Future Minting</li>
            <li className="nav__list__item_2 text text--small text--regular">Strong Community with Tokens Granting Voting Powers</li>
          </ul>
          <Link to="features" spy={true} smooth={true}><button className="btn btn--accent">
            <span className="text--standart text--medium text-bold">Learn More</span>
          </button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid_choose;
