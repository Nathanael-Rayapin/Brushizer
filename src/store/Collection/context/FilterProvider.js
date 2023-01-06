import { useReducer, useEffect } from "react";
import { ShapeOptions, BackgroundOptions, ShapecolorOptions } from "../data/data";
import FilterContext from './filter-context';

const defaultChekboxState = {
    checkboxStateShp: new Array(ShapeOptions.length).fill(false),
    checkboxStateBgd: new Array(BackgroundOptions.length).fill(false),
    checkboxStateShc: new Array(ShapecolorOptions.length).fill(false)
};

const checkboxReducer = (state, action) => {
    if (action.type === 'SHAPE') {
        state.checkboxStateShp[action.payload] = !state.checkboxStateShp[action.payload];
    };
    if (action.type === 'BACKGROUND') {
        state.checkboxStateBgd[action.payload] = !state.checkboxStateBgd[action.payload];
    };
    if (action.type === 'SHAPE_COLOR') {
        state.checkboxStateShc[action.payload] = !state.checkboxStateShc[action.payload];
    };
    if (action.type === 'RESET') {
        return {
            ...state,
            checkboxStateShp: (state.checkboxStateShp).fill(false),
            checkboxStateBgd: (state.checkboxStateBgd).fill(false),
            checkboxStateShc: (state.checkboxStateShc).fill(false)
        }
    };
    return defaultChekboxState;
};

const FilterProvider = props => {
    const [checkboxState, dispatchCheckboxAction] = useReducer(checkboxReducer, defaultChekboxState);

    const checkboxChangeHandler = (title, position) => {
        switch (title) {
            case 'shape':
            dispatchCheckboxAction({type: 'SHAPE', payload: position});
            break;

            case 'background':
            dispatchCheckboxAction({type: 'BACKGROUND', payload: position});
            break;

            case 'shape_color':
            dispatchCheckboxAction({type: 'SHAPE_COLOR', payload: position});
            break;
            
            default:
            break;
        };
    };

    const checkboxesResetHandler = () => {
        dispatchCheckboxAction({type: 'RESET', payload: 0});
    };

    const filterContext = {
        checkboxStateShp: checkboxState.checkboxStateShp,
        checkboxStateBgd: checkboxState.checkboxStateBgd,
        checkboxStateShc: checkboxState.checkboxStateShc,
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