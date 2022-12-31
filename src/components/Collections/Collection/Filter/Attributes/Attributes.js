import { Fragment } from 'react';
import { useState } from 'react'
import { Accordion, Menu } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { addCollection, removeCollection, buildCollectionsCard } from './FunctionsCollections/FunctionsCollections';

import artworks from '../../../../../data/artworks.json';
import './style.scss'

function Attributes() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [collections, setCollections] = useState(artworks);
    const [count, setCount] = useState(0);
    
    const handleIndex = (e, titleProps) => {
      /* Handle Checkbox Index */
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
    };

    function formFactory(value) {
      /* Build Dynamic Form (Shape, Background, Shape-Color) */
      return (
        <Form>
          <Form.Group grouped>
            {artworks.map((artwork) => {
                return (
                <Form.Checkbox 
                key={artwork.id} 
                label={artwork.attributes[value]} 
                name={artwork.attributes.name} 
                value={artwork.attributes[value]}
                onChange={(event, {checked}) => manageForm(event, checked, value)} />) 
                }
            )}
          </Form.Group>
        </Form>
      )
    };

    function manageForm(event, checked, value) {
      /* Manage Filter Collections */
      const newForm = { value : event.target.textContent, form: value };
      // Checked
      if (checked === true) {
        if (count === 0) {
          setCount(count + 1);
          const filteredCollections = addCollection(artworks, newForm);
          setCollections(filteredCollections);
        } else {
          setCount(count + 1);
          const filteredCollections = addCollection(artworks, newForm);
          setCollections(prevState => [...prevState, ...filteredCollections]);
        }
      // UnChecked
      } else {
        setCount(count - 1);
        if (count === 1) {
          setCollections(artworks);
        } else {
          const filteredCollections = removeCollection(collections, newForm);
          setCollections(filteredCollections);
        }
      }
    };

    return (
      <Fragment>
        <div className='filter_attributes'>
            <Accordion className='filter_attributes_accordion' as={Menu} vertical>
                <Menu.Item>
                <Accordion.Title
                active={activeIndex === 0}
                content='Shape'
                index={0}
                onClick={handleIndex}
                />
                <Accordion.Content active={activeIndex === 0} content={formFactory('shape')} />
                </Menu.Item>
    
                <Menu.Item>
                    <Accordion.Title
                    active={activeIndex === 1}
                    content='Background'
                    index={1}
                    onClick={handleIndex}
                    />
                    <Accordion.Content active={activeIndex === 1} content={formFactory('background')} />
                </Menu.Item>

                <Menu.Item>
                    <Accordion.Title
                    active={activeIndex === 2}
                    content='Shape-Color'
                    index={2}
                    onClick={handleIndex}
                    />
                    <Accordion.Content active={activeIndex === 2} content={formFactory('shape_color')} />
                </Menu.Item>
            </Accordion>
        </div>
        <div className='filter_gallery'>
          { buildCollectionsCard(collections) }
        </div>
      </Fragment>
      );
};

export default Attributes;