/* COMPONENTS */
import { Icon, Menu, Search, Dropdown } from 'semantic-ui-react'
import { useState } from 'react';
import './style.scss'

const SortByOptions = [
    {
        value: '1', text: "Price low to high"
    },
    {
        value: '2', text: "Price high to low"
    }
];

function MenuCollection() {

    const [searchCollection, setSearch] = useState('');

    return (
                <Menu className='filter_menu'>
                    <Icon name='filter' size='large' />
                    <Search
                        input={{ icon: 'search', iconPosition: 'left' }}
                        placeholder="Search in collection ..."
                        value={searchCollection}
                        onSearchChange={(e, { value }) => setSearch(value)}
                    />
                    <Dropdown className='filter_menu_dropdown' defaultValue={"1"} selection fluid options={SortByOptions} />
                </Menu>
            
      )
}   

export default MenuCollection;