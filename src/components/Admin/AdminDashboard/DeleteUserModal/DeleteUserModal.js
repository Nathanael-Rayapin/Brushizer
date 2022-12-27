import './style.scss'
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { useState } from 'react';

function DeleteUserModal({ user, handleDeleteUser }) {
    const [open, setOpen] = useState(false);

    const handleDeleteConfirm = () => {
        setOpen(false);
        handleDeleteUser(user);
    }
    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={<Icon className='user-row-options-delete' name="trash" size="small" />}
            className='delete_account'
        >
            <Header icon className='delete_account-header'>
                <Icon name='trash' />
                Delete user : <span className='delete_user-pseudo'>{user.pseudo}</span>
            </Header>
            <Modal.Content className='delete_account-content'>
                <p>
                    Are you sure you want to delete user {user.pseudo} ?
                    This will erase all data from this user, <span className='warning-artist'>including his artworks if he is an artist.</span>
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

export default DeleteUserModal;
