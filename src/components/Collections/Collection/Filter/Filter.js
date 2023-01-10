import Attributes from './Attributes/Attributes';
import MenuCollection from './MenuCollection/MenuCollection';
import FilterProvider from '../../../../store/Collection/context/FilterProvider';

import './style.scss';

function Filter() {
    return (
        <FilterProvider>
            <div className='filter_container'>
                <div className='filter_container-menu'>
                    <MenuCollection />
                </div>
            <div className='filter_container-attributes'>
                    <Attributes />
                </div>
            </div>
        </FilterProvider>
      );
};

export default Filter;