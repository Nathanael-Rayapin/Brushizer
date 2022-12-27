import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss'

function Brand({ brandName, searchVisible, brandDisplay }) {
    const shouldDisplay = !searchVisible || brandDisplay;

    return (
        <h1 className={`header_brand${shouldDisplay ? '--shown' : '--hidden'}`}><Link to='/'>{brandName}</Link></h1>
    );
}

Brand.propTypes = {
    brandDisplay: PropTypes.bool.isRequired,
    brandName: PropTypes.string.isRequired,
    searchVisible: PropTypes.bool.isRequired,
};

export default Brand;

