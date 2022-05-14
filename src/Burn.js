import './css/styles.css';
import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import fire from "./images/fire5.svg";

const ECAT = '0xBCb3b42D9A8Ec2EA47982418a3506231A6B67Af9';

export function ConnectMeta() {
    const { activateBrowserWallet, deactivate, account } = useEthers()
    const etherBalance = useEtherBalance(account)
    const ecatBalance = useTokenBalance(ECAT, account)
    return (
      <div className="ConnectWallet card_dapp">
        <div>
          <button className="btn btn--accent2 text--small text--medium btn-top-connect" onClick={() => activateBrowserWallet()}>Connect</button><span className="vertical-line" />
          <button className="btn btn--accent2 text--small text--medium btn-top-connect" onClick={() => deactivate()}>Disconnect</button>
        </div>
        {account && <p className="text-dapp"><p className="badge text--small text-dapp-header">Account:</p> {account}</p>}
        {etherBalance && <p className="text-dapp"><p className="badge text--small text-dapp-header">Balance:</p> {formatEther(ecatBalance)} ECAT</p>}
        <p className='text title'>Amount to Burn:</p>
        <input type='text'></input><span className='vertical-line' />
        <button className="btn btn--accent2 text--small text--medium btn-top-burn btn-dapp-use" onClick={() => deactivate()}><img src={fire} className="burn-img" alt="fire svg" />Burn</button>
      </div>
    )
}