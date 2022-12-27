import SignInForm from './SignInForm/SignInForm';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.scss'

function SignIn() {
    // LOCAL STATES
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    // 

    const { userInfo } = useSelector((state) => state.user);
    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])

    return (
        <div className='signin'>
            <div className='signin_brand'>
                <h1 className='signin_brand_logo'><Link to='/'>BRUSHIZER</Link></h1>
                <p className='signin_brand_text'>Sign in to your account.</p>
            </div>
            <div className='signin-wrapper'>
                <h2 className='signin-wrapper-title'>
                    Sign in
                </h2>
                <SignInForm
                    pseudo={pseudo}
                    password={password}
                    setPseudo={setPseudo}
                    setPassword={setPassword} />
                <p className='signin_form-login'>Don't have an account yet ? <Link to='/signup' className='signup-link'>Create an account</Link></p>
            </div>
        </div>
    );
}

export default SignIn;
