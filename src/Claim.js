import './css/styles.css';
import { useEtherBalance, useEthers } from '@usedapp/core';
import Claim from "./images/claim-coin.svg";

export function ConnectMeta() {
    const { activateBrowserWallet, deactivate, account } = useEthers()
    // eslint-disable-next-line no-unused-vars
    const etherBalance = useEtherBalance(account)
    return (
      <div className="ConnectWallet card_dapp">
        <div>
          <button className="btn btn--accent2 text--small text--medium btn-top-connect" onClick={() => activateBrowserWallet()}>Connect</button><span className="vertical-line" />
          <button className="btn btn--accent2 text--small text--medium btn-top-connect" onClick={() => deactivate()}>Disconnect</button>
        </div>
        {account && <p className="text-dapp"><p className="badge text--small text-dapp-header">Account:</p> {account}</p>}
        <p className='text-dapp-header'>Check if any Rewards are Available:</p><p className='text'></p>
        <button className="btn btn--accent2 text--small text--medium btn-top-burn btn-dapp-use"><img src={Claim} className="burn-img" alt="fire svg" />Claim</button>
      </div>
    )
}