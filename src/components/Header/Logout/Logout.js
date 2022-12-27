import PropTypes from 'prop-types';
import './style.scss'

import { Icon } from 'semantic-ui-react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../../features/user/userAction';

function Logout({ pseudo }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        const userToken = localStorage.getItem('userToken');
        console.log("Déco");
        dispatch(logoutUser({ userToken }));
        navigate('/');
        window.location.reload();
    }
    return (
        <div className={`logout`}>
            {pseudo && <p className='logout-pseudo'><Link to='/profile'>{pseudo}</Link></p>}
            <button className='logout-btn' onClick={() => handleLogout()}><Icon name='shutdown' /></button>
        </div>
    );
}

Logout.propTypes = {
    pseudo: PropTypes.string,
}

Logout.defaultProps = {
    pseudo: null
}

export default Logout;
