import { ConnectMeta } from './Stake';
import './css/styles.css';
import { DAppNav } from './DApp_nav';
import HeaderTop from './Header_top_dapp';
import ParticlesUsed from "./ParticlesUsed";


export default function stake() {
  return (
    <div className="stake">
        <HeaderTop />
        <ParticlesUsed />
        <DAppNav />
        <ConnectMeta />
    </div>
  );
}
