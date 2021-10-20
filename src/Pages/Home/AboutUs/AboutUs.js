import React from 'react';
import './AboutUs.css';
import aboutImage from '../../../images/istockphoto-998313080-612x612.jpg'

const AboutUs = () => {
    return (
        <div className='container' id="aboutus">
        <div className='about-section'>
        <h2 className='text-primary fs-1 fw-bold mt-5'>
                  About US{' '}
                  
                </h2>
          <div className='row'>
            <div className='col-md-6'>
              <div className='about-image'>
                <img className='w-100' src={aboutImage} alt='' />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='about-right-section text-start p-4'>
               
                <h1 className='text-primary mt-5'>Our Practice: Where Luxury & Dentistry Meet</h1>
                <p>
                When we opened our doors, we had one singular vision: to provide state-of-the-art dental care in a calm, comfortable and luxurious setting. Complete with chic décor and stunning views, our 12th-story penthouse suite in the heart of Beverly Hills was designed to deliver the most specialized procedures in cosmetic dentistry while also accommodating patients who require the ultimate in privacy and personalized care. With every imaginable amenity, there is no other cosmetic dentist Beverly Hills has available, or even the world, that boasts comparable facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;