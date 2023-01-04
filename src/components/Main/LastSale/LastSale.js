import {
    Fragment,
    useState
} from 'react';
import SaleCarousel from './SaleCarousel/SaleCarousel';
import Filter from './Filter/Filter';
import artworks from '../../../data/artworks.json';
import mediaQuery from './MediaQuery/MediaQuery';
import './style.scss'

function LastSale() {
    const [filteredArtworks, setFilteredArtworks] = useState([...artworks]);
    const [isAvailableArtworks, setIsAvailableArtworks] = useState(true);

    const setArtworks = (Artworks) => {
        setFilteredArtworks(Artworks);
    };

    const setAvailable = (isAvailable) => {
        setIsAvailableArtworks(isAvailable);
    };

<<<<<<< HEAD
  return (
    <Fragment>
      <div className="wave-wrapper">
        <img src="/assets/wave-top.svg" alt="Wave" />
      </div>
      <section className="last">
        <Filter onSetArtworks={setArtworks} onSetAvailable={setAvailable} />
        {/* Available for this Date */}
        <SaleCarousel
          items={filteredArtworks}
          isAvailable={isAvailableArtworks}
          isDesktop={mediaQuery("(min-width: 1200px)")}
        />
        {/* Not Available for this Date */}
        {!isAvailableArtworks && (
          <div className="ui grid container last_not-available">
            <p className="eight wide">
              Aucun Artworks Vendues pour cette Période
            </p>
          </div>
        )}
      </section>
      <div className="wave-bottom" >
            <img src="/assets/wave-small-bottom.svg" alt="Wave" />
        </div>
    </Fragment>
  );
=======
    return (
        <Fragment >
        <div className="wave-wrapper" >
            <img src="/assets/wave-top.svg" alt="Wave" />
        </div>
        <section className='last'> {
            /* Filter - Artworks */} 
            <Filter onSetArtworks={
                        setArtworks
                    }
                    onSetAvailable={
                        setAvailable
                    }
            /> {
            /* Available for this Date */} {
                    <SaleCarousel
                        items={
                            filteredArtworks
                        }
                        isAvailable={
                            isAvailableArtworks
                        }
                        isDesktop={
                            mediaQuery('(min-width: 1200px)')
                        }
                    />
                } {
            /* Not Available for this Date */} {
                    !isAvailableArtworks &&
                    <div className='ui grid container last_not-available'>
                        <p className='eight wide'> Aucun Artworks Vendues pour cette Période </p> 
                    </div>
        }
        </section>
        <div className="wave-bottom" >
            <img src="/assets/wave-small-bottom.svg" alt="Wave" />
        </div>
        </Fragment>
                            );
>>>>>>> d57a5b8b363f67d4363882346d32c2063a910737
}

export default LastSale;