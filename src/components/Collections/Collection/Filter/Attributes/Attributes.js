/* COMPONENTS */
import { Fragment } from 'react';
import { useState } from 'react'
import { Accordion, Menu } from 'semantic-ui-react';
import { ShapeForm, BackgroundForm, ShapeColorForm } from './FormsLists/FormsLists';

import artworkImg from '../../../../../assets/001.png';
import './style.scss'

function Attributes() {

    const [activeIndex, setActiveIndex] = useState(1)
  
    const handleClick = (event, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index
    setActiveIndex(newIndex)

    }
    return (
      <Fragment>
        <div className='filter_attributes'>
            <Accordion className='filter_attributes_accordion' as={Menu} vertical>
                <Menu.Item>
                <Accordion.Title
                active={activeIndex === 0}
                content='Shape'
                index={0}
                onClick={handleClick}
                />
                <Accordion.Content active={activeIndex === 0} content={ShapeForm} />
                </Menu.Item>
    
                <Menu.Item>
                    <Accordion.Title
                    active={activeIndex === 1}
                    content='Background'
                    index={1}
                    onClick={handleClick}
                    />
                    <Accordion.Content active={activeIndex === 1} content={BackgroundForm} />
                </Menu.Item>

                <Menu.Item>
                    <Accordion.Title
                    active={activeIndex === 2}
                    content='Shape-Color'
                    index={2}
                    onClick={handleClick}
                    />
                    <Accordion.Content active={activeIndex === 2} content={ShapeColorForm} />
                </Menu.Item>
            </Accordion>
        </div>
        <div className='filter_gallery'>
          <div className='filter_gallery_card'>
            <img className='filter_gallery_card_img' src={artworkImg} alt='artwork preview'></img>
          </div>
        </div>
      </Fragment>
      )
}   

export default Attributes;