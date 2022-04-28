import './header.css';
import discord from '../../assets/images/discord.svg';
import twitter from '../../assets/images/twitter.svg';
import yt from '../../assets/images/youtube.svg';

export function Header(props: any) {
    return (
        <div className={`header-container ${props.isTabletOrMobile ? 'mobile-header-container' : ''}`}>
            <div className="header-section blank-square"></div>
            <div className="header-section social-links">
                <a href="https://discord.gg/champsonly" target="_blank" className="discord-link">
                    <img src={discord} alt="discord" />
                </a>
                <a href="https://twitter.com/champsonlypass" target="_blank" className="twitter-link">
                    <img src={twitter} alt="twitter" />
                </a>
                <a href="https://www.youtube.com/channel/UCL3oLqgZlmcjD3wrNbLyGeQ" target="_blank" className="yt-link">
                    <img src={yt} alt="yt" />
                </a>
            </div>
            <div className="header-section info-section">
                <button className="header-section docs-button">Docs</button>
                <button className="header-section discord-id">Discord ID</button>
                <button className="header-section wallet-address">Wallet</button>
            </div>
        </div>
    );
}