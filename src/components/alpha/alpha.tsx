import './alpha.css';

export function Alpha(props: any) {
    return (
        <div className={`alpha-container ${props.isTabletOrMobile ? 'mobile-alpha-container' : ''}`}>
           <button>ALPHA</button>
           <button>SNIPE</button>
           <button>CREATE</button>
        </div>
    )
}