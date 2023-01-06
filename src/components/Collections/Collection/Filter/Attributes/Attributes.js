import { Fragment  } from 'react';
import { useState } from 'react'
import { Accordion, Menu, Icon } from 'semantic-ui-react';
import { buildCollectionsCard, sortPrice } from './ContentAccordion/Utils/Collections/FunctionsCollections';
import ContentAccordion from './ContentAccordion/ContentAccordion';

import artworks from '../../../../../data/artworks.json';
import './style.scss';

function Attributes(props) {
    const [activeIndex, setActiveIndex] = useState(1);
    const [collections, setCollections] = useState(artworks);
    const [activesForms, setActivesForms] = useState([]);
    const [count, setCount] = useState(0);

    // Sort Collections
    sortPrice(collections, props.onSortByPrice);
    
    // Handle Checkbox Index
    const handleIndex = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
    };

    return (
      <Fragment>
        <div className='filter_attributes'>
            <Accordion className='filter_attributes_accordion' as={Menu} vertical>
              {/* Shape */}
                <Menu.Item>
                  <Accordion.Title
                  active={activeIndex === 0} content='Shape' index={0} onClick={handleIndex} />
                  <Accordion.Content 
                  active={activeIndex === 0} content={(
                    <ContentAccordion
                    value={"shape"}
                    getcollections={collections}
                    setcollections={setCollections}
                    getactiveforms={activesForms}
                    setactiveforms={setActivesForms}
                    getcount={count}
                    setcount={setCount} />
                  )} />
                </Menu.Item>
              {/* Background */}
                <Menu.Item>
                    <Accordion.Title
                    active={activeIndex === 1} content='Background' index={1} onClick={handleIndex} />
                    <Accordion.Content 
                    active={activeIndex === 1} content={(
                      <ContentAccordion
                      value={"background"}
                      getcollections={collections}
                      setcollections={setCollections}
                      getactiveforms={activesForms}
                      setactiveforms={setActivesForms}
                      getcount={count}
                      setcount={setCount} />
                    )} />
                </Menu.Item>
              {/* Shape-Color */}
                <Menu.Item>
                    <Accordion.Title active={activeIndex === 2} content='Shape-Color' index={2} onClick={handleIndex} />
                    <Accordion.Content 
                    active={activeIndex === 2} content={(
                      <ContentAccordion
                      value={"shape_color"}
                      getcollections={collections}
                      setcollections={setCollections}
                      getactiveforms={activesForms}
                      setactiveforms={setActivesForms}
                      getcount={count}
                      setcount={setCount} />
                    )} />
                </Menu.Item>
            </Accordion>
        </div>
        <div className='filter_gallery'>
          {/* Tags Button */}
          <div className='filter_gallery_tags'>
            <div className='filter_gallery_tags--tag'>Blue <Icon className='filter_gallery_tags--delete' name='close' size='small' /></div>
            <div className='filter_gallery_tags--tag'>001 <Icon className='filter_gallery_tags--delete' name='close' size='small' /></div>
            <button className='filter_gallery_tags_button'>
              <Icon 
              className='filter_gallery_tags_button--icon' 
              name='undo' 
              size='large'/>
            </button>
          </div>
          {/* Artworks Gallery */}
          <div className='filter_gallery_items'>
          { collections.length ? buildCollectionsCard(collections) : 
            <div className="ui grid container filter_gallery-not-available">
               <p className="eight wide">
                  Aucun Artwork trouver pour cette recherche
              </p>
            </div> }
          </div>
        </div>
      </Fragment>
      );
};

export default Attributes;