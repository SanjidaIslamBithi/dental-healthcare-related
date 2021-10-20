import React from 'react';
import './Banner.css';
import banner1 from '../../../images/interior-modern-equipped-dental-office-with-x-ray-monitors-dentist-stomatology-orthodontic-workplace.jpg'
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='banner'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='about-image'>
              <img className='w-100' src={banner1} alt='' />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='about-right-section text-start p-4'>
              <h1 className='mt-5'>DentalCare&health</h1>
              <p className="fw-bold fst-italic">
              Blessed are those who can hold lively conversations with the helplessly mute, for they shall be called dentists
              </p>
             {/* linking up with about */}
            <Link to='/aboutus' className='menu-linker'>
              {' '}
              <Button className='btn btn-primary mt-3 fw-bold about-btn'>About Us</Button>
            </Link>
         
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;