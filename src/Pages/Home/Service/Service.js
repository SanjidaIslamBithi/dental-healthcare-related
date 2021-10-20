import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Service.css';

const Service = ({ service }) => {
  // const {service} = props;
  const { id, name, price, description, img } = service;
  return (
    <div className='service col-md-6 col-lg-3 col-sm-12 pb-3'>
      <Card className="clr">
        {' '}
        <Card.Img variant='top' className='w-100' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
         <Link to={`/booking/${id}`}>
         <Button variant='primary'>Price: $ {price}</Button>
         </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
