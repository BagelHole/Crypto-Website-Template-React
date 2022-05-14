import { ConnectMeta } from './Burn';
import './css/styles.css';
import { DAppNav } from './DApp_nav';
import HeaderTop from './Header_top_dapp';
import ParticlesUsed from "./ParticlesUsed";


export default function dApp() {
  return (
    <div className="dApp">
        <HeaderTop />
        <ParticlesUsed />
        <DAppNav />
        <ConnectMeta />
    </div>
  );
}
