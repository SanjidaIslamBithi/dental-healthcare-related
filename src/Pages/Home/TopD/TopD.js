import React from 'react';
import { Button, Card } from 'react-bootstrap';

const TopD = ({topdent}) => {
    const {name, specialitin, img} = topdent;
    return (
        <div className='col-md-6 col-lg-4 col-sm-12 pb-3'>
      
        <Card className="clr">
          {' '}
          <Card.Img variant='top' className="w-100" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{specialitin}</Card.Text>
            <Button variant='primary'>AppointMent</Button>
          </Card.Body>
        </Card>
     
    </div>
    );
};

export default TopD;