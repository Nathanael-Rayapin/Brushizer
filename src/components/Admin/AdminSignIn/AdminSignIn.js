import AdminSignInForm from './AdminSignInForm/AdminSignInForm';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchUserInfos } from '../../../utils/fetchUserInfos';
import './style.scss'

function SignIn() {
    // LOCAL STATES
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    // 
    const { userInfo } = useSelector((state) => state.user);
    const navigate = useNavigate()



    useEffect(() => {
        const getUserInfo = async () => {
            const userId = localStorage.getItem('userId');
            const userInfos = await fetchUserInfos(userId);
            if (userInfos.role_id !== 3) {
                navigate('/404');
                return;
            }
        }

        if (userInfo) {
            getUserInfo();
        }
    }, [navigate, userInfo])

    return (
        <div className='A-signin'>
            <div className='A-signin_brand'>
                <h1 className='A-signin_brand_logo'><Link to='/'>BRUSHIZER</Link></h1>
                <p className='A-signin_brand_text'>Sign in /Admin.</p>
            </div>
            <div className='A-signin-wrapper'>
                <h2 className='A-signin-wrapper-title'>
                    Sign in
                </h2>
                <AdminSignInForm
                    pseudo={pseudo}
                    password={password}
                    setPseudo={setPseudo}
                    setPassword={setPassword} />
            </div>
        </div>
    );
}

export default SignIn;
