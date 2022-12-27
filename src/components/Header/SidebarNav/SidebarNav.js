import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Logout from '../Logout/Logout';
import './style.scss'

function SidebarNav({ sideVisible, pseudo }) {
    return (
        <div className={`header_sidebar${sideVisible ? '--shown' : ''}`}>
            <ul className='header_sidebar_list'>
                <div className='header_sidebar_list_menu'>
                    <li className='header_sidebar_list_menu-item'><NavLink to='/artists'>Artists</NavLink></li>
                    <li className='header_sidebar_list_menu-item'><NavLink to='/collections'>Collections</NavLink></li>
                    <li className='header_sidebar_list_menu-item'><NavLink to='/charity'>Charity</NavLink></li>
                    <li className='header_sidebar_list_menu-item'><NavLink to='/contact'>Contact</NavLink></li>
                </div>
                <div className='header_sidebar_list_auth'>
                    {pseudo && <Logout pseudo={pseudo} />}
                    {!pseudo && <>
                        <li className='header_sidebar_list_auth-item'><NavLink to='/signin'>Sign in</NavLink></li>
                        <li className='header_sidebar_list_auth-item'><NavLink to='/signup'>Create account</NavLink></li>
                    </>}
                </div>
            </ul>
        </div>

    );
}

SidebarNav.propTypes = {
    sideVisible: PropTypes.bool.isRequired,
    pseudo: PropTypes.string,
};

SidebarNav.defaultProps = {
    pseudo: null,
}


export default SidebarNav;
