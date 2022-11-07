import React from 'react';
import cavity from '../../assets/images/cavity.png'
import floride from '../../assets/images/fluoride.png'

import whitering from '../../assets/images/whitening.png'
import Service from './Service';


const Services = () => {

    const services= [
        {
            _id:1,
            name:'floride',
            description:"lorem test dfj sdfjsdf psdfjldsf ",
            img :floride
        },
        {
            _id:2,
            name:'cavity',
            description:"lorem test dfj sdfjsdf psdfjldsf ",
            img :cavity
        },
        {
            _id:3,
            name:'white ring',
            description:"lorem test dfj sdfjsdf psdfjldsf ",
            img :whitering
        },
    ]
    return (
        <div className='py-12'> 
            <div className='text-center'>
                <h4 className="text-primary font-bold">Our services</h4>
                <h2 className='text-thin text-3xl'>Services We Provide</h2>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 py-12 px-12 gap-4'>

           {
            services.map(service=><Service
            key={service._id}
            service={service}
            >

            </Service>)
           }
        </div>
        </div>
    );
};

export default Services;