import React from 'react';

const FilterContext = React.createContext({
    teste: 0,
    checkboxStateShp: [],
    checkboxStateBgd: [],
    checkboxStateShc: [],
    checkboxChange: () => {},
    checkboxesReset: () => {}
});

export default FilterContext;