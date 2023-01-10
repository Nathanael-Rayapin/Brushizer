import { useContext } from 'react';
import { Icon, Menu, Search, Dropdown } from 'semantic-ui-react'

import FilterContext from '../../../../../store/Collection/context/filter-context';
import { SortByOptions } from '../../../../../store/Collection/data/data';

import './style.scss';

const MenuCollection = () => {
    const filterCtx = useContext(FilterContext);

    const onFilteredPrice = (event) => {
        filterCtx.sortArtworkByPrice(event.target.textContent);
    };

    const onResetHandler = () => {
        filterCtx.checkboxesReset();
    };

    const onSearchHandler = (event) => {
        filterCtx.searchChange(event.target.value);
    }

    return (
        <Menu className='filter_menu'>
            <Icon className='filter_menu--reset' name='filter' size='large' />
            <Search
            className='filter_menu_search'
            input={{ icon: 'search', iconPosition: 'left' }}
            placeholder="Search in collection ..."
            onSearchChange={onSearchHandler} />
            <Dropdown 
            className='filter_menu_dropdown' 
            defaultValue={"1"} 
            selection 
            fluid 
            options={SortByOptions}
            onChange={onFilteredPrice} />
            <button className='filter_menu_button' onClick={onResetHandler}>
                <Icon 
                className='filter_menu_button-icon' 
                name='undo' 
                size='large' />
            </button>
        </Menu>     
    );
};

export default MenuCollection;