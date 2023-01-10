import React from 'react';

const FilterContext = React.createContext({
    // Variables
    sortArtworkState: '',
    checkboxStateShp: [],
    checkboxStateBgd: [],
    checkboxStateShc: [],
    collectionsState: [],
    formsState: [],
    countState: 0,
    // Functions
    sortArtworkByPrice: () => {},
    checkboxChange: () => {},
    checkboxesReset: () => {},
    collectionsChange: () => {},
    addActivesForms: () => {},
    removeActivesForms: () => {},
    countChange: () => {}
});

export default FilterContext;