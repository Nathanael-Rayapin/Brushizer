import PropTypes from 'prop-types';

// Components
import UserForm from './UserForm/UserForm';
import ArtistForm from './ArtistForm/ArtistForm';

import './style.scss'

function SignUpForm({ userType, pseudo, country, email, password,
    setPseudo, setCountry, setEmail, setPassword }) {
    return (
        userType === 'user' ?
            <UserForm userType={userType}
                pseudo={pseudo}
                country={country}
                email={email}
                password={password}
                setPseudo={setPseudo}
                setCountry={setCountry}
                setEmail={setEmail}
                setPassword={setPassword} />
            : <ArtistForm userType={userType}
                pseudo={pseudo}
                country={country}
                email={email}
                password={password}
                setPseudo={setPseudo}
                setCountry={setCountry}
                setEmail={setEmail}
                setPassword={setPassword}
            />
    );
}

SignUpForm.propTypes = {
    userType: PropTypes.string, // userType should be 'user' or 'creator'
};

SignUpForm.defaultProps = {
    userType: 'user',
}

export default SignUpForm;
