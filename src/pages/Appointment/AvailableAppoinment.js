import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingMOdal from './BookingMOdal';
import Service from './Service';

const AvailableAppoinment = ({date}) => {
    const [services,setServices]=useState([]);
    const {treatment,setTreatment}=useState(null)
    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='px-12'>
            <h3 className="text-center text-secondary font-bold text-xl">Available service on {format(date,'PP')} </h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
                {
                    services.map(service=><Service 
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>

            {treatment && <BookingMOdal treatment={treatment} ></BookingMOdal>}
            
        </div>
    );
};

export default AvailableAppoinment;