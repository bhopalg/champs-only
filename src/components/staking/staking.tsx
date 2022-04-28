import './staking.css';
import logo from '../../assets/images/champs_pixel_logo.png';
import pass from '../../assets/images/pass.svg';

export function Staking(props: any) {
    const staked = [];
    for (let i = 0; i <= 2; i++) {
        staked.push(<img src={pass} alt="staked-pass" key={'staked-pass' + i}/>);
    }

    const unstaked = [];
    for (let i = 0; i <= 5; i++) {
        unstaked.push(<img src={pass} alt="unstaked-pass" key={'unstaked-pass' + i}/>)
    }

    return (
        <div className={`staking-container ${props.isTabletOrMobile ? 'mobile-staking-container' : ''}`}>
            <div className="unstaked">
                <h1>UNSTAKED</h1>
                <div className="unstaked-image-container">
                    {unstaked}
                </div>
            </div>
            <div className="staking-middle">
                <img src={logo} alt="Champs Only Logo"/>
                <div>
                    <button>STAKE</button>
                    <button>UNSTAKE</button>
                </div>
            </div>
            <div className="staked">
                <h1>UNSTAKED</h1>
                <div className="staked-image-container">
                    {staked}
                </div>
            </div>
            <div className="balance-container">
                <h2><span>TROPHY BALANCE:</span> 600</h2>
                <h2>TROPHY PER DAY: 5</h2>
            </div>
        </div>
    )
}