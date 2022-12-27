/* COMPONENTS */
import { useState } from 'react'
import { Accordion, Menu, Form } from 'semantic-ui-react'
import './style.scss'


const BackgroundForm = (
    <Form>
      <Form.Group grouped>
        <Form.Radio label='Red' name='background' value='red' />
        <Form.Radio label='Orange' name='background' value='orange' />
        <Form.Radio label='Green' name='background' value='green' />
        <Form.Radio label='Blue' name='background' value='blue' />
      </Form.Group>
    </Form>
  )
  
  const ShapeForm = (
    <Form>
      <Form.Group grouped>
        <Form.Radio label='001' name='size' value='001' />
        <Form.Radio label='002' name='size' value='002' />
        <Form.Radio label='003' name='size'value='003' />
        <Form.Radio label='004' name='size' value='004' />
      </Form.Group>
    </Form>
  )

  const ShapeColorForm = (
    <Form>
      <Form.Group grouped>
        <Form.Radio label='Red' name='shape-color' value='red' />
        <Form.Radio label='Orange' name='shape-color' value='orange' />
        <Form.Radio label='Green' name='shape-color' value='green' />
        <Form.Radio label='Blue' name='shape-color' value='blue' />
      </Form.Group>
    </Form>
  )

function Attributes() {

    const [activeIndex, setActiveIndex] = useState(0)
  
    const handleClick = (e, titleProps) => {
      const { index } = titleProps
      const newIndex = activeIndex === index ? -1 : index
  
      setActiveIndex(newIndex)

    }
    return (
        <div className='filter_attributes'>
                
            <Accordion as={Menu} vertical>
                <Menu.Item>
                <Accordion.Title
                active={activeIndex === 1}
                content='Shape'
                index={0}
                onClick={handleClick}
                />
                <Accordion.Content active={activeIndex === 1} content={ShapeForm} />
                </Menu.Item>
    
                <Menu.Item>
                    <Accordion.Title
                    active={activeIndex === 0}
                    content='Background'
                    index={1}
                    onClick={handleClick}
                    />
                    <Accordion.Content active={activeIndex === 0} content={BackgroundForm} />
                </Menu.Item>

                <Menu.Item>
                    <Accordion.Title
                    active={activeIndex === 1}
                    content='Shape-Color'
                    index={1}
                    onClick={handleClick}
                    />
                    <Accordion.Content active={activeIndex === 1} content={ShapeColorForm} />
                </Menu.Item>
            </Accordion>
        </div>
      )
}   

export default Attributes;