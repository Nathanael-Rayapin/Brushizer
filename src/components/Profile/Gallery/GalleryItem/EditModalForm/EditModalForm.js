import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { editArtwork } from '../../../../../features/artwork/artworkAction';

import './style.scss'
import DeleteArtworkModal from '../DeleteArtworkModal/DeleteArtworkModal';

function EditModalForm({ artwork, setOpen }) {
    const [description, setDescription] = useState(artwork.description);
    const dispatch = useDispatch();
    const { error, success } = useSelector( // Getting loading and error state from Redux store
        (state) => state.artwork
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        if (artwork.description === description) {
            console.log('same description');
            return;
        }
        setOpen(false);
        dispatch(editArtwork({ description, artworkId: artwork.id }));
        window.location.reload();
    }

    return (
        <Form className='create-modal_form' onSubmit={(e) => handleSubmit(e)}>
            <Form.Field type='text'>
                <label>Name</label>
                <input
                    placeholder='Name of your artwork'
                    value={artwork.name}
                    disabled
                />
            </Form.Field>
            <Form.TextArea
                label='Description'
                placeholder='Description of your artwork'
                required={true}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            >
            </Form.TextArea>
            <Form.Field type='number'>
                <label>Price (USD)</label>
                <input
                    placeholder='USD'
                    value={artwork.price_usd}
                    disabled
                />
            </Form.Field>
            <Form.Field type='number'>
                <label>Price (SOL)</label>
                <input
                    placeholder='SOL'
                    disabled
                    value={artwork.price_sol}
                />
            </Form.Field>
            {error && <div className='error_message-create'>
                <h4 className='error_message-create-title'>Error</h4>
                <p className='error_message-create-text'>{error}.</p>
            </div>}
            {success && <div className='success_message-create'>
                <h4 className='success_message-create-title'>Success !</h4>
                <p className='success_message-create-text'>
                    Your artwork has been updated !
                </p>
            </div>}
            <Button color='green' type='submit' disabled={!(artwork.description !== description)}>Confirm</Button>
            <DeleteArtworkModal artworkId={artwork.id} />
        </Form>
    );
}

EditModalForm.propTypes = {

};

export default EditModalForm;
