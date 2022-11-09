import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots}=service;
    return (
        <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary text-center">{name}</h2>
          <p>{
            slots.length ? <span> {slots[0]} </span> : <span className='text-red-700 font-bold'> NO slot avlaible</span>
}</p>
          <p><span className='text-red-600 font-bold'>{slots.length} </span> space avilable</p>
        
          <div className="card-actions justify-center">
           
            <label
             onClick={() => setTreatment(service)}
            htmlFor="bookingMOdal"  className="btn"  disabled={slots.length===0} >open modal</label>
          </div>
        </div>
      </div>
    );
};

export default Service;