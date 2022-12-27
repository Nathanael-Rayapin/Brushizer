import './style.scss'
import { Link } from 'react-router-dom';

function AuthMenu() {
    return (
        <div className='auth-menu'>
            <Link to='/signin' className='auth-menu-link'>
                <button className='auth-menu-btn signin-btn'>
                    Sign in
                </button>
            </Link>
            <Link to='/signup' className='auth-menu-link'>
                <button className='auth-menu-btn signup-btn'>
                    Create account
                </button>
            </Link>
        </div>
    );
}

export default AuthMenu;
