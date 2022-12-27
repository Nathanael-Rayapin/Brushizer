import './style.scss'
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

function Search({ searchVisible, handleSearchButton }) {
    const handleClick = () => {
        handleSearchButton();
    }
    return (
        <div className={`search ${searchVisible ? 'search--active' : ''}`}>
            <form role="search" className='search-form'>
                <Icon name='search' size='large' className='search-icon' onClick={() => handleClick()} />
                {searchVisible && <input
                    className='search_input'
                    aria-label='search'
                    type="search"
                    placeholder="Search..."
                    autoComplete="off" >
                </input>}
            </form>
        </div>
    );
}

Search.propTypes = {
    handleSearchButton: PropTypes.func.isRequired
};

export default Search;
