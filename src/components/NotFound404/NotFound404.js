import './style.scss'
import { Link } from 'react-router-dom';

function NotFound404() {
    return (
        <div className='wrapper_404'>
            <img className='wrapper_404-svg' src='/assets/404.svg' alt='Page not found' />
            <div className='wrapper_404-content'>
                <p className='wrapper_404-content-text'>The page you're looking for does not exist.</p>
                <Link className='wrapper_404-content-home' to='/'>Go home</Link>
            </div>
        </div>
    );
}

export default NotFound404;
