import React from 'react';

import './ContactUs.css';
import aboutpic from '../../../images/Health professional team-bro.png'
import { Button } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <div className="back-clr">
    <h1 className="text-primary fs-1 fw-bold mt-5">Contact with us</h1>
    <div className="contact-form p-3">
      <div className="row d-flex justify-content-center ">
        <div className="col-md-6 mt-5">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Your Name"
          />
          <br />
          <input
            className="input-field"
            type="Email"
            placeholder="Enter Your Email"
          />
          <br />
          <input
            className="input-field"
            type="text"
            placeholder="Enter Your Phone"
          />
          <br />
         
          <Button variant="primary">Submit</Button>{' '}
        </div>
        <div className="col-md-6">
          <div className="contact-im">
            <img
              className="w-50 h-100 ml-4"
              src={aboutpic}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
    // <div >
    //     <Container className="mt-5">
    //   <Form className="backcl">
    //     <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control type='email' placeholder='name@example.com' />
    //     </Form.Group>
    //     <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
    //       <Form.Label>Example textarea</Form.Label>
    //       <Form.Control as='textarea' rows={3} />
    //     </Form.Group>
    //   </Form>
    //   </Container>
    // </div>
  );
};

export default ContactUs;
