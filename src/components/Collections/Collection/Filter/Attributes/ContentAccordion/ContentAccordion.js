/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import { addToCollection, removeActiveForms } from '../../../../../../store/Collection/function/function';
import { ShapeOptions, BackgroundOptions, ShapecolorOptions } from '../../../../../../store/Collection/data/data';

import FilterContext from '../../../../../../store/Collection/context/filter-context';
import artworks from '../../../../../../data/artworks.json';

const ContentAccordion = (props) => {
    const [useEffetChange, setUseEffetChange] = useState(false);
    const filterCtx = useContext(FilterContext);

    // React to All Checkbox Changes
    useEffect(() => {
      if (props.getcount > 0) {
          const collections = addToCollection(artworks, props.getactiveforms);
          props.setcollections(collections);
        }
    }, [useEffetChange]);

    // Manage Collections
    function manageCollections(event, checked, formTitle, index) {
      filterCtx.checkboxChange(formTitle, index)

      switch (checked) {
        case true :
          const newForm = {};
          newForm["id"] = props.getcount;
          newForm["value"] = (event.target.textContent).toLowerCase();
          newForm["form"] = formTitle;

          if (props.getcount === 0) {
            props.setactiveforms([newForm]);
            reactToChange("plus");
          } else {
            props.setactiveforms(oldValues => ([...oldValues, newForm]));
            reactToChange("plus");
          }
        break;
        case false :
          if (props.getcount === 1) {
            reusableUnchekedFunc(event, formTitle);
            props.setcollections(artworks);
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
      removeActiveForms(props.getactiveforms, checkboxValue, formTitle);
      reactToChange("moins");
    }

    // Force useEffect React to States
    function reactToChange(sign) {
      if (sign === "plus") { props.setcount(props.getcount + 1) };
      if (sign === "moins") { props.setcount(props.getcount - 1) };
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
                onChange={(event, {checked}) => manageCollections(event, checked, props.value)} />
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
                onChange={(event, {checked}) => manageCollections(event, checked, props.value)} />
                )
              }
            )}
          </Form.Group>
        </Form>
    );
};

export default ContentAccordion;