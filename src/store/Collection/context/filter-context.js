import React from 'react';

const FilterContext = React.createContext({
    checkboxStateShp: false,
    checkboxStateBgd: false,
    checkboxStateShc: false,
    checkboxChange: () => {},
    checkboxesReset: () => {}
});

export default FilterContext;