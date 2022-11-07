import React from 'react';

const Service = ({service}) => {
    return (
       
             <div className='flex items-center flex-col gap-3 rounded-lg shadow-lg p-6'>
                <figure>
                    <img src={service.img} alt="" />
                </figure>
                <h4>{service.name}</h4>
                <p>{service.description}</p>
          
        </div>
    );
};

export default Service;