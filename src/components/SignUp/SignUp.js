import './style.scss'
import { Link } from 'react-router-dom';

import SignUpForm from './SignUpForm/SignUpForm';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserChoice from './UserChoice/UserChoice';
import { Icon } from 'semantic-ui-react';

function SignUp() {
    const [userType, setUserType] = useState(null);
    const [pseudo, setPseudo] = useState('');
    const [artistName, setArtistName] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { userInfo } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo]);

    const handleUserChoice = (userChoice) => {
        if (userChoice === 'user') {
            setUserType('user');
            return;
        }
        if (userChoice === 'artist') {
            setUserType('artist');
            return;
        }
    }

    const handleBack = () => {
        setUserType(null);
    }

    return (
        <div className='signup'>
            <div className='signup_brand'>
                <h1 className='signup_brand_logo'><Link to='/'>BRUSHIZER</Link></h1>
                <p className='signup_brand_text'>Join the community and share your digital artwork with others.</p>
            </div>
            <div className='signup-wrapper'>
                {userType !== null && <button onClick={handleBack} className='back-btn'><Icon name='arrow left' />Back</button>}
                <h2 className='signup-wrapper-title'>
                    Create an Account
                </h2>
                {userType === null && <UserChoice handleUserChoice={handleUserChoice} />}
                {userType !== null && <SignUpForm
                    userType={userType}
                    pseudo={pseudo}
                    country={country}
                    email={email}
                    password={password}
                    artistName={artistName}
                    setPseudo={setPseudo}
                    setCountry={setCountry}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setArtistName={setArtistName}
                />}
                <p className='signup_form-text'>Already have an account ? <Link to='/signin' className='login-link'>Sign in</Link></p>
            </div>
        </div>
    );
}

export default SignUp;
