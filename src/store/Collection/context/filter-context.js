import React from 'react';

const FilterContext = React.createContext({
    // Variables
    sortArtworkState: '',
    checkboxStateShp: [],
    checkboxStateBgd: [],
    checkboxStateShc: [],
    collectionsState: [],
    formsState: [],
    // Functions
    sortArtworkByPrice: () => {},
    checkboxChange: () => {},
    checkboxesReset: () => {},
    collectionsChange: () => {},
    addActivesForms: () => {},
    removeActivesForms: () => {}
});

export default FilterContext;