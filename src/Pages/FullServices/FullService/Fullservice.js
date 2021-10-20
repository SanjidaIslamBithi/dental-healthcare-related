import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Fullservice = ({fullservice}) => {
    const { name, price, description, img } = fullservice;
    return (
      <div className='service col-md-6 col-lg-3 col-sm-12 pb-3'>
        <Card className="clr">
          {' '}
          <Card.Img variant='top' className='w-100' src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant='primary'>Price: $ {price}</Button>
          </Card.Body>
        </Card>
      </div>
    );
  };

export default Fullservice;