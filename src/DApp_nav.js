import './css/styles.css';
import fire from "./images/fire5.svg";
import Currency from "./images/currency.svg";
import Claim from "./images/claim-coin.svg";
import { Link, NavLink } from "react-router-dom";


export function DAppNav() {
    return (
      <div className="ConnectWallet card_dapp_nav">
        <h3>Apps</h3>
        <NavLink to="../dApp" activeClassName="btn-top-burn"><button className="btn btn--accent2 text--small text--medium btn-top-burn" ><img src={fire} className="burn-img" alt="fire svg" />Burn</button></NavLink>
        <Link to="../stake"><button className="btn btn--accent2 text--small text--medium btn-top-burn" ><img src={Currency} className="burn-img" alt="fire svg" />Stake </button></Link>
        <Link to="../claim"><button className="btn btn--accent2 text--small text--medium btn-top-burn" ><img src={Claim} className="burn-img" alt="fire svg" />Claim </button></Link>
        <p>These Apps are Under Construction 👷🏼‍♂️</p>
        <p>Connection to MetaMask is working but no smart contracts are tied to the Burn/Stake/Claim buttons</p>
      </div>
    )
}