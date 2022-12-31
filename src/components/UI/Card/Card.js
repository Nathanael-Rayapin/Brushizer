import { NavLink } from 'react-router-dom';

import './Card.scss';

const Card = (props) => {
    return(
        <NavLink to='/artwork/1'>
            <div className='card_filter'>
              <img className='card_filter_img' src={props.image} alt='artwork preview'></img>
              <div className='card_filter_wrapper'>
                <span className='card_filter_wrapper--title'>BRUSHIZER #001</span>
              </div>
              <div className='card_filter_price'>
                <img src={`/assets/logos/solanaLogoMark.svg`} alt='Solana logo' className='solana'/>
                <p className='card_filter_price--crypto'>25.17 SOL</p>
              </div>
            </div>
          </NavLink>
    );
};

export default Card;