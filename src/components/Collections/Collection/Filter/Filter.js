/* COMPONENTS */
import { useState } from 'react';
import Attributes from './Attributes/Attributes';
import MenuCollection from './MenuCollection/MenuCollection';

import './style.scss'

function Filter() {
    const [labelValue, setLabelValue] = useState('Price low to high');

    const setPriceLabel = (label) => {
        setLabelValue(label);
    };
    
    return (
        <div className='filter_container'>
            <div className='filter_container-menu'>
                <MenuCollection 
                onSetPriceLabel={setPriceLabel} />
            </div>
            <div className='filter_container-attributes'>
                <Attributes 
                onSortByPrice={labelValue} />
            </div>
        </div>
      );
};

export default Filter;