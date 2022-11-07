import React from 'react';
import exc from '../../assets/images/treatment.png'
import Buttons from '../Components/Buttons';
const Exceptional = () => {
    return (
        <div>
            <div className="hero  px-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={exc} className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', 
                making it look like readable English. Many desktop publishing packages and web page.</p>
                <Buttons text="Get Started"/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Exceptional;