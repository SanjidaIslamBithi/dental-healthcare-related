import React, { useEffect, useState } from 'react';
import TopD from '../TopD/TopD';

const TopDis = () => {
    const [topdents, setTopdents] =useState([]);
    useEffect(()=>{
        fetch('specialist.json')
        .then((res) => res.json())
        .then((data)=> setTopdents(data));
    },[]);
    return (
        <div id="topdentists">
            <h2 className='text-primary fs-1 fw-bold mt-5'>Our Top Dentists</h2>
            <div  className='service-container row'>
                {topdents.map((topdent) =>(<TopD key={topdent.id} topdent={topdent}></TopD>

                ))}
            </div>
            
        </div>
    );
};

export default TopDis;