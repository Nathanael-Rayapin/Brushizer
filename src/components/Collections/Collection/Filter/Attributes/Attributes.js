/* COMPONENTS */
import { useState } from 'react'
import { Accordion, Menu, Form } from 'semantic-ui-react'
import './style.scss'

const ShapeForm = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label='001' name='size' value='001' />
      <Form.Checkbox label='002' name='size' value='002' />
      <Form.Checkbox label='003' name='size'value='003' />
      <Form.Checkbox label='004' name='size' value='004' />
    </Form.Group>
  </Form>
)

const BackgroundForm = (
    <Form>
      <Form.Group grouped>
        <Form.Checkbox label='Red' name='background' value='red' />
        <Form.Checkbox label='Orange' name='background' value='orange' />
        <Form.Checkbox label='Green' name='background' value='green' />
        <Form.Checkbox label='Blue' name='background' value='blue' />
      </Form.Group>
    </Form>
  )

  const ShapeColorForm = (
    <Form>
      <Form.Group grouped>
        <Form.Checkbox label='Red' name='shape-color' value='red' />
        <Form.Checkbox label='Orange' name='shape-color' value='orange' />
        <Form.Checkbox label='Green' name='shape-color' value='green' />
        <Form.Checkbox label='Blue' name='shape-color' value='blue' />
      </Form.Group>
    </Form>
  )

function Attributes() {

    const [activeIndex, setActiveIndex] = useState(1)
  
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
      )
}   

export default Attributes;