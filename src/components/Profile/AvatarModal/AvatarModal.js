import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react'
import { useEffect, useState } from 'react';
import AvatarItem from './AvatarItem/AvatarItem';
import axios from 'axios';

import './style.scss'

function AvatarModal({ userAvatar, avatars, setUserAvatar }) {
    const [open, setOpen] = useState(false);
    const [selectedAvatarEl, setSelectedAvatarEl] = useState(null);
    const [avatarName, setAvatarName] = useState('');

    useEffect(() => {
        if (selectedAvatarEl !== null) {
            selectedAvatarEl.classList.toggle('avatar-selected');
        }
    }, [selectedAvatarEl])

    const postProfilePic = async (imgName) => {
        const userId = localStorage.getItem('userId');
        const userToken = localStorage.getItem('userToken');
        const headers = {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        }
        const response = await axios.patch(`http://localhost:8000/users/${userId}`,
            { profile_pic: imgName },
            { headers }
        );
        console.log("Patch user response : ", response);
    }

    const handleConfirm = () => {
        setOpen(false)
        if (selectedAvatarEl !== null) {
            setUserAvatar(avatarName);
            postProfilePic(avatarName);
        } else {
            setUserAvatar(undefined);
            postProfilePic('');
        }
    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<img src={userAvatar ?
                `/assets/avatars/${userAvatar}`
                :
                `/assets/icons/avatar-placeholder.png`
            }
                alt='avatar placeholder'></img>
            }
            className='create_modal'
        >
            <Modal.Header className='create_modal-header'>Change avatar</Modal.Header>
            <Modal.Content className='edit_modal-content'>
                {/* <Image size='small' src={hasAvatar ?
                    `/assets/avatars/${userAvatar}`
                    :
                    `/assets/artwork-placeholder.png`
                } wrapped /> */}
                <Modal.Description id='avatar_modal-main'>
                    <h3 className='avatar_modal-title'>Select an avatar</h3>
                    <div className='avatar_gallery'>
                        <div className='avatar_gallery_container'>
                            {avatars.map((avatar) => (
                                <AvatarItem
                                    avatarImg={avatar.image}
                                    avatarName={avatarName}
                                    key={avatar.id}
                                    setSelectedAvatarEl={setSelectedAvatarEl} // To register element to create border on select
                                    selectedAvatarEl={selectedAvatarEl}
                                    setAvatarName={setAvatarName} // To store name of the avatar image
                                />
                            ))}
                        </div>
                    </div>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions className='edit_modal-footer'>
                <Button color='black' onClick={() => setOpen(false)}>
                    Close
                </Button>
                <Button
                    content="Confirm"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => handleConfirm()}
                    positive
                />
            </Modal.Actions>
        </Modal>
    );
}

AvatarModal.propTypes = {

};

export default AvatarModal;



// <a href="https://www.freepik.com/free-vector/find-person-job-opportunity_8063764.htm#query=avatar&position=0&from_view=keyword">Image by studiogstock</a> on Freepik
