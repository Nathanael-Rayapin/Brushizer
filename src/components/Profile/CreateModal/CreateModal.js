import './style.scss'

import { Button, Modal, Image } from 'semantic-ui-react';
import { useState } from 'react';
import CreateModalForm from './CreateModalForm/CreateModalForm';

function CreateModal() {
    const [open, setOpen] = useState(false)
    const [previewSrc, setPreviewSrc] = useState('/assets/artwork-placeholder.png');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [usdPrice, setUsdPrice] = useState(0);
    const [solPrice, setSolPrice] = useState(0);
    const [imgName, setImgName] = useState('');

    const handlePreviewChange = (newSrc) => {
        setPreviewSrc(newSrc);
    }

    const handleClose = () => {
        setOpen(false);
        setPreviewSrc('/assets/artwork-placeholder.png');
    }

    return (
        <Modal
            onClose={() => handleClose()}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<button className='profile_infos_buttons-artwork'>+ Create</button>}
            className='create_modal'
        >
            <Modal.Header className='create_modal-header'>Create your artwork</Modal.Header>
            <Modal.Content image className='create_modal-content' id='create_modal-content'>
                <Image size='medium' src={previewSrc} wrapped />
                <Modal.Description>
                    <h3 className='create_modal-title'>Artworks informations</h3>
                    <CreateModalForm
                        handlePreviewChange={handlePreviewChange}
                        name={name} setName={setName}
                        description={description} setDescription={setDescription}
                        usdPrice={usdPrice} setUsdPrice={setUsdPrice}
                        solPrice={solPrice} setSolPrice={setSolPrice}
                        imgName={imgName} setImgName={setImgName}
                        setOpen={setOpen}
                    />
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions className='create_modal-footer'>
                <Button color='black' onClick={() => handleClose()}>
                    Close
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default CreateModal;
