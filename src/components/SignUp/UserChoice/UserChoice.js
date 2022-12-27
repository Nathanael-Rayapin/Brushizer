import './style.scss'
import { Icon } from 'semantic-ui-react'

function UserChoice({ handleUserChoice }) {
    const handleClick = (choice) => {
        handleUserChoice(choice);
    }
    return (
        <>
            <h2 className='choice-title'>Select user type</h2>
            <div className='choice_wrapper'>
                <div className='choice-option choice-user'>
                    <button className='user-btn choice-btn' onClick={() => handleClick('user')}>
                        <Icon circular name='user' className='user-icon' />
                    </button>
                    <h3>User</h3>
                </div>
                <div className='divider-user'></div>
                <div className='choice-option choice-artist'>
                    <button className='artist-btn choice-btn' onClick={() => handleClick('artist')}>
                        <Icon circular name='brush paint' className='artist-icon' />
                    </button>
                    <h3>Artist</h3>
                </div>
            </div>
        </>
    );
}

export default UserChoice;
