import './style.scss'
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteArtwork } from '../../../../../features/artwork/artworkAction';

function DeleteArtworkModal({ artworkId }) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleDeleteConfirm = () => {
        setOpen(false);
        dispatch(deleteArtwork({ artworkId }));
        window.location.reload();
    }
    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={<Button color='red' type='button'><Icon name='delete' size='small'></Icon>Delete this artwork</Button>}
            className='delete_account'
        >
            <Header icon className='delete_account-header'>
                <Icon name='trash' />
                Delete artwork
            </Header>
            <Modal.Content className='delete_account-content'>
                <p>
                    Are you sure you want to delete this artwork ?
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

export default DeleteArtworkModal;
