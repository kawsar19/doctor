import React from 'react';

import Buttons from '../Components/Buttons';
import appoinment from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor.png'
const Appoinment = () => {
    return (
        <div>
             <div className="hero  px-12 mt-12" style={{
                background:`url(${appoinment})`
             }}>
            <div className="hero-content flex-col lg:flex-row ">
                <img src={doctor} className="max-w-lg rounded-lg shadow-2xl mt-[-150px]" />
                <div>
                <h1 className="text-5xl font-bold text-white">Exceptional Dental Care, on Your Terms</h1>
                <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', 
                making it look like readable English. Many desktop publishing packages and web page.</p>
                <Buttons text="Get Started"/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Appoinment;