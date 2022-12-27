import './style.scss';
import { Button, Form } from 'semantic-ui-react';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createArtwork } from '../../../../features/artwork/artworkAction';

function CreateModalForm(
    {
        handlePreviewChange,
        name, setName, description, setDescription, usdPrice, setUsdPrice, solPrice, setSolPrice,
        imgName, setImgName, setOpen
    }
) {
    const [canSubmit, setCanSubmit] = useState(true);
    const dispatch = useDispatch();
    const { error, success } = useSelector( // Getting loading and error state from Redux store
        (state) => state.artwork
    )
    const artworkImg = useRef(null);

    const handleFileChange = (e) => {
        const upload = artworkImg.current;
        const file = upload.files[0];
        const acceptedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/svg+xml'];
        const fileType = file.type;

        if (!acceptedTypes.includes(fileType)) {
            alert('Wrong file type. You can only send .jpg, .png, or .svg files.');
            upload.value = null;
            setImgName('');
            setCanSubmit(false);
            return;
        } else {
            handlePreviewChange(URL.createObjectURL(file))
            setCanSubmit(true);
            setImgName(file.name);
        }

        if (file.size > 5120000) {
            alert('Files is too big. It must be less than 5MB.');
            upload.value = null;
            setImgName('');
            return;
        } else {
            handlePreviewChange(URL.createObjectURL(file))
            setCanSubmit(true);
            setImgName(file.name);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createArtwork(
            { name, image: imgName, description, artist_name: localStorage.getItem('userPseudo'), price_usd: usdPrice, price_sol: solPrice }
        ))

        setName('');
        setDescription('');
        setImgName('');
        setUsdPrice(0);
        setSolPrice(0);
        artworkImg.current.value = '';
    }

    useEffect(() => {
        if (success) {
            window.location.reload();
        }
    });

    return (
        <Form className='create-modal_form' onSubmit={(e) => handleSubmit(e)}>
            <Form.Field type='text' required>
                <label>Name</label>
                <input
                    placeholder='Name of your artwork'
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Field>
            <Form.TextArea
                label='Description'
                placeholder='Description of your artwork'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            >
            </Form.TextArea>
            <Form.Field type='number' required={true}>
                <label>Price (USD)</label>
                <input
                    placeholder='USD'
                    value={usdPrice}
                    onChange={(e) => {
                        setUsdPrice(e.target.value)
                        setSolPrice((e.target.value * 13.98).toFixed(2))
                    }}
                    required
                    min={0.01}
                    max={1000000}
                />
            </Form.Field>
            <Form.Field type='number'>
                <label>Price (SOL)</label>
                <input
                    placeholder='SOL'
                    disabled
                    value={solPrice}
                    onChange={(e) => setSolPrice(e.target.value)}
                />
            </Form.Field>
            <Form.Field required={true}>
                <label>Artwork image</label>
                <input
                    type={'file'}
                    required
                    ref={artworkImg}
                    accept=".png, .jpg, .jpeg, .svg"
                    onChange={(e) => handleFileChange(e)}
                >
                </input>
            </Form.Field>
            {error && <div className='error_message-create'>
                <h4 className='error_message-create-title'>Error</h4>
                <p className='error_message-create-text'>{error}.</p>
            </div>}
            {success && <div className='success_message-create'>
                <h4 className='success_message-create-title'>Success !</h4>
                <p className='success_message-create-text'>
                    Your artwork has been created ! You can close this and refresh the page to see changes.
                </p>
            </div>}
            <Button color='green' type='submit' disabled={!canSubmit}>Confirm</Button>
        </Form>
    );
}

export default CreateModalForm;
