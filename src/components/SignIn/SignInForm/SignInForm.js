import './style.scss';
import { Button, Form } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { loginUser } from '../../../features/user/userAction';

function SignInForm({ pseudo, password, setPseudo, setPassword }) {

    const { loading, error, userInfo } = useSelector( // Getting loading and error state from Redux store
        (state) => state.user
    )
    const navigate = useNavigate(); // To handle redirection after login
    const dispatch = useDispatch(); // To handle action in Redux

    const handleSubmit = () => {
        // console.log('Submit form : Pseudo : ', pseudo, 'Password : ', password);
        dispatch(loginUser({ pseudo, password }));
    }

    useEffect(() => {
        if (userInfo) navigate('/');
        if (error) {
            setPassword('');
            setPseudo('');
        }
    }, [navigate, userInfo, setPassword, setPseudo, error]);

    return (
        <div className='signin_form'>
            <div className='signin_form-container'>
                <Form className='form' onSubmit={() => handleSubmit()}>
                    <Form.Field>
                        <label className='form-label'>Pseudo</label>
                        <input
                            className="form-pseudo"
                            type="text"
                            placeholder='Your pseudo'
                            value={pseudo}
                            onChange={(e) => setPseudo(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input
                            className="form-password"
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Field>
                    {error !== null &&
                        <div className='error_message-login'>
                            <h4 className='error_message-login-title'>Error</h4>
                            <p className='error_message-login-text'>Incorrect pseudo or password. Please try again.</p>
                        </div>
                    }
                    <Button type='submit' className='form-submit login-btn' disabled={loading}>
                        {loading ?
                            <img src='/assets/loader.svg' alt='Loading spinner' />
                            :
                            'Login'}
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default SignInForm;