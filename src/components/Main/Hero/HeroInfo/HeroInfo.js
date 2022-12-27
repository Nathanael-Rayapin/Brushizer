import './style.scss'
import { NavLink } from 'react-router-dom';

function HeroInfo() {
    return (
        <div className='hero_info'>
            <div className='hero_info-title'>
                <h1>Join the community & share your <strong>NFT</strong> with <span> others. </span>
                </h1>
            </div>
            <div className='hero_info_buttons'>
                <button className='hero_info_buttons-mint'><NavLink to='/signup'>CREATE ACCOUNT</NavLink></button>
                <button className='hero_info_buttons-show'><NavLink to='/artists'>SHOW ARTISTS</NavLink></button>
            </div>
        </div>
    );
}

export default HeroInfo;
