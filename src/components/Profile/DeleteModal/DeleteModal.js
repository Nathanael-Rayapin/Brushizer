import './style.scss'
import { Button, Header, Icon, Modal, Dropdown } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, logoutUser } from '../../../features/user/userAction';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DeleteModal() {
    const [open, setOpen] = useState(false);
    const { userInfo } = useSelector( // Getting loading and error state from Redux store
        (state) => state.user
    )
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteConfirm = () => {
        setOpen(false);
        dispatch(deleteUser({ id: userInfo.id, token: userInfo.token }));
        const userToken = localStorage.getItem('userToken');
        dispatch(logoutUser({ userToken }));
        navigate('/');
        window.location.reload();
    }
    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={<Dropdown.Item className='delete-account-btn' icon='trash' text='Delete account' />}
            className='delete_account'
        >
            <Header icon className='delete_account-header'>
                <Icon name='trash' />
                Delete account
            </Header>
            <Modal.Content className='delete_account-content'>
                <p>
                    Are you sure you want to delete your account ?
                    This action will delete all your informations and redirect you to home page.
                </p>
            </Modal.Content>
            <Modal.Actions className='delete_account-options'>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={() => handleDeleteConfirm()}>
                    <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default DeleteModal;
