/* Hooks & Modules */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

/* Components */
import Burger from './SidebarNav/Burger/Burger';
import NavMenu from './NavMenu/NavMenu';
import SidebarNav from './SidebarNav/SidebarNav';
import Search from './Search/Search';
import Brand from './Brand/Brand';
import AuthMenu from './AuthMenu/AuthMenu';
import Logout from './Logout/Logout';

import './style.scss';

function Header() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1200px)'
    });
    const { userInfo } = useSelector( // Getting loading and error state from Redux store
        (state) => state.user
    );
    const [sideVisible, setSideVisible] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [brandDisplay, setBrandDisplay] = useState(true);

    const handleBurger = () => {
        setSideVisible(!sideVisible);
    }

    const handleSearchButton = () => {
        let mql = window.matchMedia('(min-width: 1200px)'); // Check if window > 1200px
        if (mql.matches) return; // If so, do nothing and return

        setSearchVisible(!searchVisible);
        setBrandDisplay(false);
    }

    useEffect(() => {
        let mql = window.matchMedia('(min-width: 1200px)');
        if (mql.matches) {
            setBrandDisplay(true);
            setSearchVisible(true);
        }

        mql.onchange = (e) => {
            if (mql.matches) {
                setBrandDisplay(true);
                setSearchVisible(true);
            } else {
                setBrandDisplay(true);
                setSearchVisible(false);
            }
        }
    }, [])

    return (
        <>
            <header className='header'>
                <Brand brandName='Brushizer.' searchVisible={searchVisible} brandDisplay={brandDisplay} />
                <div className={`header_right ${searchVisible ? 'header_right--active' : ''}`}>
                    <NavMenu />
                    <Search searchVisible={searchVisible} handleSearchButton={handleSearchButton} />
                    {!userInfo && <AuthMenu />}
                    {(userInfo && isDesktop) && <Logout pseudo={userInfo.pseudo} />}
                    <Burger searchVisible={searchVisible} handleBurger={handleBurger} />
                </div>
            </header>
            <SidebarNav sideVisible={sideVisible} pseudo={userInfo ? userInfo.pseudo : null} />
        </>
    );
}

export default Header;
