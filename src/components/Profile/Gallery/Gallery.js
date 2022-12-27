// import PropTypes from 'prop-types';
import './style.scss';
import GalleryItem from './GalleryItem/GalleryItem';

function Gallery({ artworks }) {
    return (
        <>
            {artworks.map((item, index) => (
                <GalleryItem artwork={item} key={index} />
            ))}
        </>
    );
}

Gallery.propTypes = {

};

export default Gallery;
