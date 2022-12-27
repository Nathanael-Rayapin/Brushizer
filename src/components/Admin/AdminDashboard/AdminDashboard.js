import './style.scss'
import Header from '../../Header/Header';
import AdminUsers from '../AdminDashboard/AdminUsers/AdminUsers';
// import users from '../../../data/users.json';
import { Menu, Icon } from 'semantic-ui-react'
import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';



function AdminDashboard({ users }) {
    const [allUsers, setAllUsers] = useState([]);
    const [allArtists, setAllArtists] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState(allUsers);
    const [filteredArtists, setFilteredArtists] = useState(allArtists);
    const [activeItem, setActiveItem] = useState('users');
    const [searchValue, setSearchValue] = useState('');

    // const { userInfo } = useSelector( // Getting loading and error state from Redux store
    //     (state) => state.user
    // );
    // const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllUsers = async () => {
            const userToken = localStorage.getItem('userToken');
            const headers = {
                'Authorization': `Bearer ${userToken}`
            }
            const response = await axios.get('http://localhost:8000/users', { headers });
            const artists = response.data.filter((user) => user.role_id === 2);
            setAllArtists(artists);
            setFilteredArtists(artists);
            setAllUsers(response.data);
            setFilteredUsers(response.data)
        }
        fetchAllUsers();
    }, [])

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
        if (e.target.value === '') {
            setFilteredArtists(allArtists);
            setFilteredUsers(allUsers);
            return;
        }
        if (activeItem === 'users') {
            const usersResult = allUsers.filter((user) => {
                return user.pseudo.toLowerCase().includes(searchValue.toLowerCase());
            });
            setFilteredUsers(usersResult);
            return;
        }
        if (activeItem === 'artists') {
            const artistsResult = allArtists.filter((artist) => {
                return artist.pseudo.toLowerCase().includes(searchValue.toLowerCase());
            });
            setFilteredArtists(artistsResult);
            return;
        }
    }

    const handleDeleteUser = async (userToDelete) => {
        const currentUsers = [...filteredUsers];
        const newUsers = currentUsers.filter((user) => user !== userToDelete);
        setFilteredUsers(newUsers);
        const newArtists = newUsers.filter((user) => user.role_id === 2)
        setFilteredArtists(newArtists);
        const userToken = localStorage.getItem('userToken');
        const headers = {
            'Authorization': `Bearer ${userToken}`,
        };
        const response = await axios.delete(
            `http://localhost:8000/admin/users/delete/${userToDelete.id}`,
            { headers }
        );
        console.log(response);
    }
    return (
        <>
            <Header />
            <section className='A-Dashboard'>
                <h2 className='A-Dashboard-title'>ADMIN DASHBOARD</h2>
                <Menu tabular>
                    <Menu.Item
                        name='Users'
                        active={activeItem === 'users'}
                        onClick={() => setActiveItem('users')}
                    />
                    <Menu.Item
                        name='Artists'
                        active={activeItem === 'artists'}
                        onClick={() => setActiveItem('artists')}
                    />
                    <div className='admin_search'>
                        <Icon name='search' size='large' className='search-icon' />
                        <input
                            className='search_input'
                            aria-label='search'
                            type="search"
                            placeholder="Search..."
                            autoComplete="off"
                            value={searchValue}
                            onChange={(e) => handleSearchChange(e)}
                        >
                        </input>
                    </div>
                </Menu>
                {activeItem === 'users' && <AdminUsers data={filteredUsers} handleDeleteUser={handleDeleteUser} />}
                {activeItem === 'artists' && <AdminUsers data={filteredArtists} handleDeleteUser={handleDeleteUser} />}
            </section>

        </>
    );
}

export default AdminDashboard;
