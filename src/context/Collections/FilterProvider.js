import { useState } from "react";
import FilterContext from './filter-context';

import { shapeOptions, backgroundOptions, shapecolorOptions } from "../../components/Collections/Collection/Filter/Attributes/ContentAccordion/Utils/Options/ArtworksOptions";

const FilterProvider = props => {
    const [shapeIsChecked, setShapeIsChecked] = useState(
        new Array(shapeOptions.length).fill(false)
    );

    const [backgroundIsChecked, setBackgroundIsChecked] = useState(
        new Array(backgroundOptions.length).fill(false)
    );

    const [shapeColorIsChecked, setShapeColorIsChecked] = useState(
        new Array(shapecolorOptions).fill(false)
    );

    const checkboxChangeHandler = (title, position) => {
        switch (title) {
            case 'shape':
            const updatedShapeState = shapeIsChecked.map((item, index) =>
            index === position ? !item : item
            );
          
            setShapeIsChecked(updatedShapeState);
            break;
            case 'background':
            const updatedBackgroundState = backgroundIsChecked.map((item, index) =>
            index === position ? !item : item
            );
              
            setBackgroundIsChecked(updatedBackgroundState);
            break;
            case 'shape_color':
            const updatedShapeColorState = shapeColorIsChecked.map((item, index) =>
            index === position ? !item : item
            );
                  
            setShapeColorIsChecked(updatedShapeColorState); 
            break;
            default:

            break;
        };
    };

    const checkboxesResetHandler = () => {
        setShapeIsChecked(new Array(shapeOptions.length).fill(false));
        setBackgroundIsChecked(new Array(backgroundOptions.length).fill(false));
        setShapeColorIsChecked(new Array(shapecolorOptions).fill(false));
    };

    const filterContext = {
        checkboxStateShp: shapeIsChecked,
        checkboxStateBgd: backgroundIsChecked,
        checkboxStateShc: shapeColorIsChecked,
        checkboxChange: checkboxChangeHandler,
        checkboxesReset: checkboxesResetHandler
    };

    return(
        <FilterContext.Provider value={filterContext}>
            {props.children}
        </FilterContext.Provider>
    );
};

export default FilterProvider;