import React, { useEffect, useState } from 'react';
import Fullservice from '../FullService/Fullservice';

const FullServices = () => {
    const [fullservices, setFullServices] = useState([]);
    useEffect(() => {
      fetch('allservises.json')
        .then((res) => res.json())
        .then((data) => setFullServices(data));
    }, []);
    return (
        <div id='fullservices'>
      <h2 className='text-primary fs-1 fw-bold mt-5'>Our All Services</h2>

      <div className='fullservice-container row'>
        
          {fullservices.map((fullservice) => (
            <Fullservice key={fullservice.id} fullservice={fullservice}></Fullservice>
          ))}
        
      </div>
    </div>
    );
};

export default FullServices;