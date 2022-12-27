import './style.scss'
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

function Burger({ searchVisible, handleBurger }) {
    const handleClick = () => {
        handleBurger();
    }

    return (
        <Icon className={`burger-btn ${searchVisible ? 'search--active' : ''}`} name='bars' size='big' onClick={() => handleClick()} />
    );
}

Burger.propTypes = {
    searchVisible: PropTypes.bool.isRequired,
    handleBurger: PropTypes.func.isRequired,
}

export default Burger;