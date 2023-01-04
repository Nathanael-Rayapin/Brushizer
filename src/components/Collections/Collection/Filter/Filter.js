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
            <div>
                <MenuCollection 
                onSetPriceLabel={setPriceLabel} />
            </div>
            <div className='filter_wrapper'>
                <Attributes 
                onSortByPrice={labelValue} />
            </div>
        </div>
        
      )
}   

export default Filter;