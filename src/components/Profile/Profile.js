import './style.scss'

import { Dropdown, Icon } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { sortArtworksByName } from '../../utils/sortArtworksByName';
import axios from 'axios';
import avatars from '../../data/avatars.json';

import DeleteModal from './DeleteModal/DeleteModal';
import UserDescription from './UserDescription/UserDescription';
import Header from '../Header/Header';
import Gallery from './Gallery/Gallery';
import CreateModal from './CreateModal/CreateModal';
import AvatarModal from './AvatarModal/AvatarModal';

function Profile({ isAuthenticated }) {
    const { userInfo } = useSelector( // Getting loading and error state from Redux store
        (state) => state.user)
    const [text, setText] = useState(userInfo?.description ? userInfo.description : '');
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isArtist, setIsArtist] = useState(null);
    const [artworks, setArtworks] = useState([]);
    const [userAvatar, setUserAvatar] = useState(undefined);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserInfo = async () => {
            const userId = localStorage.getItem('userId');
            const response = await axios.get(`http://localhost:8000/users/${userId}`);
            const userInfos = response.data;
            setText(userInfos.description);
            if (userInfos.profile_pic) {
                setUserAvatar(userInfos.profile_pic);
            }
            if (userInfos.role_id >= 2) {
                setIsArtist(true);
                const response = await axios.get(`http://localhost:8000/artworks/user/${userId}`);
                setArtworks(sortArtworksByName(response.data));
            } else {
                setIsArtist(false);
            }
        }

        const handlePageRender = () => {
            if (!userInfo) {
                navigate('/signin'); // Redirect user to sign-in if he is not logged in
                return;
            }
            fetchUserInfo();
        }

        handlePageRender();

    }, [userInfo, navigate]);

    const handleToggleEdit = async () => {

        if (isDescriptionOpen) {
            const userId = localStorage.getItem('userId');
            const userToken = localStorage.getItem('userToken');
            const config = {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${userToken}`,
                }
            };
            const response = await axios.patch(`http://localhost:8000/users/${userId}`,
                { description: text }, config);
            console.log(response);
        }
        setIsDescriptionOpen(!isDescriptionOpen);
        setText(text);
    }

    return (
        <>
            <Header />
            <section className='profile'>
                {userInfo && // If user is authenticated, display his profile infos.
                    <div className='profile-wrapper'>
                        <div className='profile_infos'>
                            <div className='profile_infos_avatar'>
                                <AvatarModal userAvatar={userAvatar} avatars={avatars} setUserAvatar={setUserAvatar} />
                            </div>
                            <div className='profile_infos_pseudo'>
                                <h2 className='profile_infos_pseudo-text'>{userInfo.pseudo}
                                    {isArtist && <Icon circular name='brush paint' className='profile-artist-icon' />}
                                </h2>
                            </div>
                            <div className='profile_infos_description'>
                                <div className='profile_infos_description-text'>
                                    {isDescriptionOpen && <UserDescription text={text} setText={setText} />}
                                    {!isDescriptionOpen && text}
                                    {(text === '' && !isDescriptionOpen) && <p className='no-description'>No description yet.</p>}
                                </div>
                                <button className='profile_infos_description-edit' onClick={() => handleToggleEdit()}>
                                    {isDescriptionOpen ? <Icon name='check' size='small' /> : <Icon name='edit' size='small' />}
                                </button>
                            </div>
                            <div className='profile_infos_buttons'>
                                <button className='profile_infos_buttons-follow'>Follow</button>
                                {/* <button className='profile_infos_buttons-artwork'>+ Create</button> */}
                                <CreateModal />
                                <Dropdown text=''>
                                    <Dropdown.Menu>
                                        <Dropdown.Item icon='share alternate' text='Share profile' />
                                        <Dropdown.Divider />
                                        <Dropdown.Item icon='warning sign' text='Report profile' />
                                        <DeleteModal />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            {/* <div className='profile_infos_feed'> </div> */}
                        </div>
                        <div className='profile_gallery'>
                            <Gallery artworks={artworks} />
                        </div>
                    </div>
                }
                {!userInfo && <div className="loader-wrapper">
                    <img src='/assets/loader.svg' alt='Loader spinning'></img>
                </div>}
            </section>

        </>
    );
}

export default Profile;
