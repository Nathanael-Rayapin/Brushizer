import { fetchUserInfos } from '../../../utils/fetchUserInfos';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

import './style.scss'
import Admin from '../Admin';

function Protected() {
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const { userInfo } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        const getUserInfo = async () => {
            const userId = localStorage.getItem('userId');
            const userInfos = await fetchUserInfos(userId);
            if (userInfos.role_id !== 3) {
                navigate('/404');
                return;
            } else {
                setIsAdmin(true);
                setIsLoading(false);
            }
        }
        if (userInfo) {
            getUserInfo();
        } else {
            navigate('/404');
        }
    }, [navigate, userInfo])
    return (
        <>
            {isLoading && <div className='protected_container'>
                <div className='protected_container-img'>
                    <img src='/assets/loader.svg' alt='svg loader'></img>
                </div>
            </div>}
            {isAdmin && <Admin />}
        </>
    )
}

export default Protected;
