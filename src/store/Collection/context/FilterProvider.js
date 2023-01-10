import { useReducer } from "react";
import { ShapeOptions, BackgroundOptions, ShapecolorOptions } from "../data/data";
import FilterContext from './filter-context';

import artworks from '../../../data/artworks.json';

// Initial State
const defaultChekboxState = {
    sortArtworkState: 'Price low to high',
    checkboxStateShp: new Array(ShapeOptions.length).fill(false),
    checkboxStateBgd: new Array(BackgroundOptions.length).fill(false),
    checkboxStateShc: new Array(ShapecolorOptions.length).fill(false),
    collectionsState: new Array(...artworks),
    formsState: []
};

// Actions Reducer
const collectionReducer = (state, action) => {
    if (action.type === 'SORT') {
        return {
            ...state,
            sortArtworkState: action.payload
        };
    };
    if (action.type === 'SHAPE') {
        return {
            ...state,
            checkboxStateShp: !state.checkboxStateShp[action.payload]
        };
    };
    if (action.type === 'BACKGROUND') {
        return {
            ...state,
            checkboxStateBgd: !state.checkboxStateBgd[action.payload]
        };
    };
    if (action.type === 'SHAPE_COLOR') {
        return {
            ...state,
            checkboxStateShc: !state.checkboxStateShc[action.payload]
        };
    };
    if (action.type === 'RESET') {
        defaultChekboxState['sortArtworkState'] = state.sortArtworkState;
        return defaultChekboxState;
    };
    if (action.type === 'COLLECTION') {
        return {
            ...state,
            collectionsState: action.payload
        };
    };
    if (action.type === 'ADD_FORMS') {
        return {
            ...state,
            formsState: [...state.formsState, action.payload]
        };
    };
    if (action.type === 'REMOVE_FORMS') {
        const index = state.formsState.findIndex(object => {
            return (
            object.value === action.payload.checkboxValue
            && object.form === action.payload.formsTitle
            );
        });
        return {
            formsState: state.formsState.splice(index, 1)
        };
    };
    return defaultChekboxState;
};

const FilterProvider = props => {
    // useReducer
    const [collectionState, dispatchCollectionAction] = useReducer(collectionReducer, defaultChekboxState);

    // Checkbox Dispatchers
    const checkboxChangeHandler = (title, position) => {
        switch (title) {
            case 'shape':
                dispatchCollectionAction({type: 'SHAPE', payload: position});
            break;

            case 'background':
                dispatchCollectionAction({type: 'BACKGROUND', payload: position});
            break;

            case 'shape_color':
                dispatchCollectionAction({type: 'SHAPE_COLOR', payload: position});
            break;
            
            default:
            break;
        };
    };

    // All Other Dispatchers
    const checkboxesResetHandler = () => {
        dispatchCollectionAction({type: 'RESET', payload: 0});
    };

    const sortArtworkByPriceHandler = (sortValue) => {
        dispatchCollectionAction({type: 'SORT', payload: sortValue});
    };

    const collectionsChangeHandler = (collections) => {
        dispatchCollectionAction({type: 'COLLECTION', payload: collections});
    };

    const addActivesFormsHandler = (newForm) => {
        dispatchCollectionAction({type: 'ADD_FORMS', payload: newForm});
    };

    const removeActivesFormsHandler = (checkboxValue, formsTitle) => {
        dispatchCollectionAction(
            {
                type: 'REMOVE_FORMS', 
                action: {
                    checkboxValue, 
                    formsTitle}
            });
    };

    const filterContext = {
        // Variables
        sortArtworkState: collectionState.sortArtworkState,
        checkboxStateShp: collectionState.checkboxStateShp,
        checkboxStateBgd: collectionState.checkboxStateBgd,
        checkboxStateShc: collectionState.checkboxStateShc,
        collectionsState: collectionState.collectionsState,
        formsState: collectionState.formsState,
        // Functions
        sortArtworkByPrice: sortArtworkByPriceHandler,
        checkboxChange: checkboxChangeHandler,
        checkboxesReset: checkboxesResetHandler,
        collectionsChange: collectionsChangeHandler,
        addActivesForms: addActivesFormsHandler,
        removeActivesForms: removeActivesFormsHandler
    };

    return(
        <FilterContext.Provider value={filterContext}>
            {props.children}
        </FilterContext.Provider>
    );
};

export default FilterProvider;