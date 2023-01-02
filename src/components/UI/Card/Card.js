import { NavLink } from 'react-router-dom';

import './Card.scss';

const Card = (props) => {
    return(
        <NavLink to='/artwork/1'>
            <div className='card_filter'>
              <img className='card_filter_img' src={props.image} alt='artwork preview'></img>
              <div className='card_filter_wrapper'>
                <span className='card_filter_wrapper--title'>{props.name}</span>
              </div>
              <div className='card_filter_price'>
                <img src={`/assets/logos/solanaLogoMark.svg`} alt='Solana logo' className='solana'/>
                <p className='card_filter_price--crypto'>{props.price_sol}</p>
              </div>
            </div>
          </NavLink>
    );
};

export default Card;