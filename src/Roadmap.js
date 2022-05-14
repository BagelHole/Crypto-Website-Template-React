import React from "react";

class Roadmap extends React.Component {
  render() {
    return (
      <div className="roadmap">
        <div className="roadmap-header">
        <h2>Roadmap</h2>
        <p className="text text--standart text--regular ">
          Let’s look at the path ECAT will take on it's journey to take over the defi world.
        </p>
        </div>
        <div className="road-body">
        <div className="card card--secondary card-red">
          <div className="card__header">
            <h3>To Do</h3>
          </div>
          <ul>
            <li>DApp Stake</li>
            <li>NFT Project</li>
            <li>1st Air Drop</li>
            <li>Community Giveaway</li>
          </ul>
        </div>
        <div className="card card--white card-yellow">
          <div className="card__header">
            <h3>In Progress</h3>
          </div>
          <ul>
            <li>DApp Burn</li>
            <li>DApp Claim</li>
            <li>Community Building</li>
          </ul>
        </div>
        <div className="card card--white card-green">
          <div className="card__header">
            <h3>Complete</h3>
          </div>
          <ul>
            <li>Token Creation</li>
            <li>Tokenomics</li>
            <li>Website Design</li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default Roadmap;
