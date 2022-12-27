import { Button, Modal, Image } from 'semantic-ui-react';
import { useState } from 'react';

import './style.scss'
import EditModalForm from './EditModalForm/EditModalForm';
// import { Link } from 'react-router-dom';

function GalleryItem({ artwork }) {
    const [open, setOpen] = useState(false)
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
                <div className='profile_gallery_first'>
                    <img src={`/assets/artworks/${artwork.image}`} alt='Test' className='gallery-img' />
                    <div className='gallery-edit-text'>Click to edit</div>
                </div>
            }
            className='edit_modal'
        >
            <Modal.Header className='edit_modal-header'>Edit your artwork</Modal.Header>
            <Modal.Content image className='edit_modal-content' id="edit_modal-content">
                <Image size='medium' src={`/assets/artworks/${artwork.image}`} wrapped className='modal-img-preview' />
                <Modal.Description>
                    <h3 className='create_modal-title'>Artworks informations</h3>
                    <EditModalForm artwork={artwork} setOpen={setOpen} />
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions className='edit_modal-footer'>
                <Button color='black' onClick={() => setOpen(false)}>
                    Close
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default GalleryItem;
