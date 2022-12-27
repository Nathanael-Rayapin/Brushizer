import PropTypes from 'prop-types';

import './style.scss'

function AvatarItem({ avatarImg, setSelectedAvatarEl, setAvatarName, selectedAvatarEl }) {
    const handleClick = (e) => {
        const previousSelected = Array.from(document.getElementsByClassName('avatar-selected'));
        if (e.target === selectedAvatarEl && previousSelected.length > 0) {
            return;
        }
        previousSelected.forEach(element => {
            element.classList.remove('avatar-selected')
        });
        setSelectedAvatarEl(e.target);
        setAvatarName(avatarImg);
    }
    return (
        <div
            className={'avatar_gallery_container-item'}
            onClick={(e) => handleClick(e)}
        >
            <img src={`/assets/avatars/${avatarImg}`} alt='Avatar choice'></img>
        </div>
    );
}

AvatarItem.propTypes = {
    avatarImg: PropTypes.string.isRequired,
};

export default AvatarItem;
