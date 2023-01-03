import { NavLink } from 'react-router-dom';

import './Card.scss';

const Card = (props) => {
    return(
        <NavLink to='/artwork/1'>
            <div className='card'>
              {/* Cover */}
              <img src={props.image} alt='Artwork Preview' className='card_cover' />
              {/* Upper Info */}
              <div className='card_info_upper'>
                <span className='card_infos_upper-id'>
                  {props.name}
                  <i aria-hidden="true" className="blue check circle small icon"></i>
                </span>
                <span className='card_infos_upper-likes'>
                  <i aria-hidden="true" className="red heart small icon"></i>
                  231
                </span>
              </div>
              {/* Lower Info */}
              <div className="card_info_lower">
                <div className="card_info_lower-price">
                  <p className="card_info_lower-price-text">
                    Last sale
                  </p>
                  <p className="card_info_lower-price-crypto">
                    <img src="/assets/logos/solanaLogoMark.svg" alt="Solana logo" />
                    {props.price_sol}
                  </p>
                  <p className="card_info_lower-price-currency">
                    $ {props.price_usd}
                  </p>
                </div>
                <div className="card_info_lower-market">
                  <p className="card_info_lower-market-text">
                    Buy on
                  </p>
                  <button className="card_info_lower-market-btn">
                    @Opensea
                  </button>
                </div>
              </div>

            </div>
          </NavLink>
    );
};

export default Card;