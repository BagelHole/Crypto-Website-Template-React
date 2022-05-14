import React from "react";
import Me from "./images/me_pic.png";
import {TwitterFollowButton} from "react-twitter-embed";

class Team extends React.Component {
  render() {
    return (
        <div className="team" id="teamLink">
            <h2 className="banner__title team2">Meet the Team</h2>
            <div className="me-info">
                <h3>Toby Miller</h3>
            <div className="me-pic">
              <img alt="Toby Miller" src={Me} />
            </div>
            <div className="centerContent">
            <div className="selfCenter spaceBetween">
                <TwitterFollowButton
                onLoad={function noRefCheck(){}}
                options={{
                    size: 'large'
                }}
                screenName="thetobymiller"
                />
            </div>
            </div>
            <p className="banner__text text text--small text--regular text--muted team-underText me-roles">
            CEO | Lead Dev | Community Manager | Marketing
            </p>
            <p className="banner__text text text--small text--regular text--muted team-underText2">
            Accomplished DevOps & Software Engineer with great knowledge on cyber security and computer systems.
            </p>
          </div>

          <div className="join-team">
            <h3>Join the Team</h3>
          <h4>Hiring:</h4>
            <div className="roles">
                <ul>
                    <li>Solidity Dev</li>
                    <li>Frontend Dev</li>
                    <li>Community Manager</li>
                    <li>Marketing</li>
                    <li>Designer</li>
                </ul>
            </div>
          <p className="banner__text text text--small text--regular text--muted">
            If you are interested in joining the team, please send a DM to <a href="https://twitter.com/thetobymiller">@thetobymiller</a>
            </p>
            </div>
        </div>
    );
  }
}

export default Team;