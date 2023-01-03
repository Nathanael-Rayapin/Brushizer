import './style.scss'
import { NavLink } from 'react-router-dom';

function HeroInfo() {
    return (
        <div className='hero_info'>
            <div className='hero_info-title'>
                <h1>Mint now your <strong>Brushizer</strong> & <span> join the community. </span>
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
