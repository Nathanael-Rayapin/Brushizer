/* COMPONENTS */
import Attributes from './Attributes/Attributes';
import MenuCollection from './MenuCollection/MenuCollection';

import './style.scss'

function Filter() {

    return (
        <div className='filter_container'>
            <div className='filter_menu'>
                <MenuCollection />
            </div>
            <div className='filter_wrapper'>
                <Attributes />
            </div>
        </div>
        
      )
}   

export default Filter;