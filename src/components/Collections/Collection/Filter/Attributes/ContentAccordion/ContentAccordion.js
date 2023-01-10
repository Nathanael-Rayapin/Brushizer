/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import { addToCollection } from '../../../../../../store/Collection/function/function';
import { ShapeOptions, BackgroundOptions, ShapecolorOptions } from '../../../../../../store/Collection/data/data';

import FilterContext from '../../../../../../store/Collection/context/filter-context';
import artworks from '../../../../../../data/artworks.json';

const ContentAccordion = (props) => {
    const filterCtx = useContext(FilterContext);
    const [useEffetChange, setUseEffetChange] = useState(false);

    // React to All Checkbox Changes
    useEffect(() => {
      if (filterCtx.countState > 0) {
          const collections = addToCollection(artworks, filterCtx.formsState);
          filterCtx.collectionsChange(collections);
        }
    }, [useEffetChange]);

    // Manage Collections
    function manageCollections(event, checked, formTitle, index) {
      filterCtx.checkboxChange(formTitle, index);

      switch (checked) {
        case true :
          const newForm = {};
          newForm["id"] = filterCtx.countState;
          newForm["value"] = (event.target.textContent).toLowerCase();
          newForm["form"] = formTitle;

          if (filterCtx.countState === 0) {
            filterCtx.addActivesForms(newForm)
            reactToChange("plus");
          } else {
            filterCtx.addActivesForms(newForm)
            reactToChange("plus");
          }
        break;
        case false :
          if (filterCtx.countState === 1) {
            reusableUnchekedFunc(event, formTitle);
            filterCtx.collectionsChange(artworks);
          } else { 
            reusableUnchekedFunc(event, formTitle);
          }
        break;

        default:
          console.log("An Error has Occured");
        break;
      }
    };

    // Re-Usable Unchecked Function
    function reusableUnchekedFunc(event, formTitle) {
      const checkboxValue = (event.target.textContent).toLowerCase();
      filterCtx.removeActivesForms(checkboxValue, formTitle);
      reactToChange("moins");
    }

    // Force useEffect React to States
    function reactToChange(sign) {
      if (sign === "plus") { filterCtx.countChange(filterCtx.countState + 1) };
      if (sign === "moins") { filterCtx.countChange(filterCtx.countState - 1) };
      setUseEffetChange(!useEffetChange);
    };

    return(
        <Form>
          <Form.Group grouped>
          {(props.value === 'shape') && ShapeOptions.map((shape) => {
                return (
                <Form.Checkbox 
                key={shape.id} 
                label={shape.label} 
                name={shape.name}
                value={shape.value}
                checked={filterCtx.checkboxStateShp[shape.id]}
                onChange={(event, {checked}) => manageCollections(event, checked, props.value, shape.id)} />
                )
              }
            )}

            {(props.value === 'background') && BackgroundOptions.map((background) => {
                return (
                <Form.Checkbox 
                key={background.id} 
                label={background.label} 
                name={background.name}
                value={background.value}
                checked={filterCtx.checkboxStateBgd[background.id]}
                onChange={(event, {checked}) => manageCollections(event, checked, props.value, background.id)} />
                )
              }
            )}

            {(props.value === 'shape_color') && ShapecolorOptions.map((shapecolor) => {
                return (
                <Form.Checkbox 
                key={shapecolor.id} 
                label={shapecolor.label} 
                name={shapecolor.name}
                value={shapecolor.value}
                checked={filterCtx.checkboxStateShc[shapecolor.id]}
                onChange={(event, {checked}) => manageCollections(event, checked, props.value, shapecolor.id)} />
                )
              }
            )}
          </Form.Group>
        </Form>
    );
};

export default ContentAccordion;