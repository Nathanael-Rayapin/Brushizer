import './style.scss'
import { NavLink } from 'react-router-dom';

function NavMenu() {
    return (
        <nav className='header_nav'>
            <ul className='header_nav_list'>
                <li className='header_nav_list-item'><NavLink to='/artists'>Artists</NavLink></li>
                <li className='header_nav_list-item'><NavLink to='/collections'>Collections</NavLink></li>
                <li className='header_nav_list-item'><NavLink to='/charity'>Charity</NavLink></li>
                <li className='header_nav_list-item'><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavMenu;
