import { Fragment, useState, useContext } from 'react';
import { Accordion, Menu, Icon } from 'semantic-ui-react';
import { buildCollectionsCard, sortPrice } from '../../../../../store/Collection/function/function';

import FilterContext from '../../../../../store/Collection/context/filter-context';
import ContentAccordion from './ContentAccordion/ContentAccordion';
import './style.scss';

function Attributes() {
    const filterCtx = useContext(FilterContext);

    const [activeIndex, setActiveIndex] = useState(1);
    const [count, setCount] = useState(0);

    // Sort Collections
    sortPrice(filterCtx.collectionsState, filterCtx.sortArtworkState);
    
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
          { filterCtx.collectionsState.length ? buildCollectionsCard(filterCtx.collectionsState) : 
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