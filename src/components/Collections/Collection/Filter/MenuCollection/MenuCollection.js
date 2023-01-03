/* COMPONENTS */
import { Icon, Menu, Search, Dropdown } from 'semantic-ui-react'
import { useState } from 'react';
import sortOptions from './Filter/Utils/Options/SortByOptions';

import './style.scss'

function MenuCollection(props) {
    const [searchCollection, setSearch] = useState('');

    function onFilteredPrice(event) {
        props.onSetPriceLabel(event.target.textContent);
    };

    return (
        <Menu className='filter_menu'>
            <Icon className='filter_menu--reset' name='filter' size='large' />
            <Search
            className='filter_menu_search'
            input={{ icon: 'search', iconPosition: 'left' }}
            placeholder="Search in collection ..."
            value={searchCollection}
            onSearchChange={(e, { value }) => setSearch(value)} />
            <Dropdown 
            className='filter_menu_dropdown' 
            defaultValue={"1"} 
            selection 
            fluid 
            options={sortOptions}
            onChange={onFilteredPrice} />
            <button className='filter_menu_button'>
                <Icon 
                className='filter_menu_button-icon' 
                name='undo' 
                size='large' />
            </button>
            
        </Menu>     
    );
};

export default MenuCollection;