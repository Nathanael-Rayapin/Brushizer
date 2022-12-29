/* COMPONENTS */
import { Fragment } from 'react';
import { useState } from 'react'
import { Accordion, Menu } from 'semantic-ui-react';
import { ShapeForm, BackgroundForm, ShapeColorForm } from './FormsLists/FormsLists';
import { NavLink } from 'react-router-dom';

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
      <NavLink to='/artwork/1'>
        <div className='filter_gallery_card'>
          <img className='filter_gallery_card_img' src={artworkImg} alt='artwork preview'></img>
          <div className='filter_gallery_card_wrapper'>
            <span className='filter_gallery_card_wrapper--title'>BRUSHIZER #001</span>
          </div>
          <div className='filter_gallery_card_price'>
              <img src={`/assets/logos/solanaLogoMark.svg`} alt='Solana logo' className='solana'/>
              <p className='filter_gallery_card_price--crypto'>25.17 SOL</p>
            </div>
        </div>
        </NavLink>
      </div>
    </Fragment>
  )
}

export default Attributes;