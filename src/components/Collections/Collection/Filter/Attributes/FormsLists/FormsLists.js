import { Form } from 'semantic-ui-react';
import artworks from '../../../../../../data/artworks.json';

export const ShapeForm = (
    <Form>
      <Form.Group grouped>
        {artworks.map((artwork) => { 
            return (
            <Form.Checkbox 
            key={artwork.id} 
            label={artwork.attributes.shape} 
            name={artwork.attributes.name} 
            value={artwork.attributes.shape} />) 
            }
        )}
      </Form.Group>
    </Form>
  )

export const BackgroundForm = (
    <Form>
      <Form.Group grouped>
        {artworks.map((artwork) => { 
            return (
            <Form.Checkbox 
            key={artwork.id} 
            label={artwork.attributes.background} 
            name={artwork.attributes.name} 
            value={artwork.attributes.background} />) 
            }
        )}
      </Form.Group>
    </Form>
  )

  export const ShapeColorForm = (
    <Form>
      <Form.Group grouped>
        {artworks.map((artwork) => { 
            return (
            <Form.Checkbox 
            key={artwork.id} 
            label={artwork.attributes.shape_color} 
            name={artwork.attributes.name} 
            value={artwork.attributes.shape_color} />) 
            }
        )}
      </Form.Group>
    </Form>
  )