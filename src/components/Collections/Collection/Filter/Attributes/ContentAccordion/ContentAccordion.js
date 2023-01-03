/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { addToCollection, removeActiveForms } from './Utils/Collections/FunctionsCollections';
import { shapeOptions, backgroundOptions, shapecolorOptions } from './Utils/Options/ArtworksOptions';

import artworks from '../../../../../../data/artworks.json';
import { useEffect } from 'react';

const ContentAccordion = (props) => {
    const [useEffetChange, setUseEffetChange] = useState(false);

    // React to All Checkbox Changes
    useEffect(() => {
      if (props.getcount > 0) {
          const collections = addToCollection(artworks, props.getactiveforms);
          props.setcollections(collections);
        }
    }, [useEffetChange]);

    // Manage Collections
    function manageCollections(event, checked, formTitle) {
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
          {(props.value === 'shape') && shapeOptions.map((shape) => {
                return (
                <Form.Checkbox 
                key={shape.id} 
                label={shape.label} 
                name={shape.name}
                value={shape.value}
                onChange={(event, {checked}) => manageCollections(event, checked, props.value)} />
                )
              }
            )}

            {(props.value === 'background') && backgroundOptions.map((background) => {
                return (
                <Form.Checkbox 
                key={background.id} 
                label={background.label} 
                name={background.name}
                value={background.value}
                onChange={(event, {checked}) => manageCollections(event, checked, props.value)} />
                )
              }
            )}

            {(props.value === 'shape_color') && shapecolorOptions.map((shapecolor) => {
                return (
                <Form.Checkbox 
                key={shapecolor.id} 
                label={shapecolor.label} 
                name={shapecolor.name}
                value={shapecolor.value}
                onChange={(event, {checked}) => manageCollections(event, checked, props.value)} />
                )
              }
            )}
          </Form.Group>
        </Form>
    );
};

export default ContentAccordion;