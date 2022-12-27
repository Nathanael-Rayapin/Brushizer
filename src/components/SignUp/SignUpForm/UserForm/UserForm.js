import './style.scss'
import { Button, Form, Dropdown } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { registerUser } from '../../../../features/user/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
    { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
    { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
    { key: 'fr', value: 'fr', flag: 'fr', text: 'France' },
]

function UserForm({ userType, pseudo, country, email, password,
    setPseudo, setCountry, setEmail, setPassword }) {
    const { loading, error, success, userInfo } = useSelector( // Getting loading and error state from Redux store
        (state) => state.user
    )
    const dispatch = useDispatch(); // To handle action in Redux
    const navigate = useNavigate();

    const handleSubmit = () => {
        // console.log('Submit form : Pseudo : ', pseudo, 'Password : ', password);
        dispatch(registerUser({ pseudo, password, country, email, role_id: 1 }));
    }

    useEffect(() => {
        if (userInfo) navigate('/');
        if (success || error) {
            setPassword('');
            setPseudo('');
            setCountry('');
            setEmail('');
        }
    }, [navigate, userInfo, setPassword, setPseudo, setCountry, setEmail, error, success]);

    return (
        <div className='signup_form'>
            <div className='signup_form-container'>
                <Form className='form' onSubmit={() => handleSubmit()}>
                    <Form.Field>
                        <label className='form-label'>Pseudo</label>
                        <input
                            name='pseudo'
                            className="form-pseudo"
                            type="text"
                            placeholder='Your pseudo'
                            value={pseudo}
                            onChange={(e) => setPseudo(e.target.value)}>
                        </input>
                    </Form.Field>
                    <Form.Field>
                        <label>Country</label>
                        <Dropdown
                            name='country'
                            clearable
                            fluid
                            search
                            selection
                            options={countryOptions}
                            placeholder='Select Country'
                            onChange={(e) => setCountry(e.target.textContent)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Email address</label>
                        <input
                            name='email'
                            className="form-email"
                            type="email"
                            placeholder='example@example.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </input>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input
                            name='password'
                            className="form-password"
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                        </input>
                    </Form.Field>
                    {error && <div className='error_message-signup'>
                        <h4 className='error_message-signup-title'>Error</h4>
                        <p className='error_message-signup-text'>{error}.</p>
                    </div>}
                    {success && <div className='success_message-signup'>
                        <h4 className='success_message-signup-title'>Success !</h4>
                        <p className='success_message-signup-text'>
                            Your account was successfully created ! You can now <Link to='/signin' className='login-here'>login here</Link>.
                        </p>
                    </div>}
                    <div className='message'></div>
                    <Button type='submit' className='form-submit' disabled={loading}>
                        {loading ?
                            <img src='/assets/loader.svg' alt='Loading spinner' />
                            :
                            'Create Account'}
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default UserForm;
