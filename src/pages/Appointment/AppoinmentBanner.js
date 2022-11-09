import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker, FocusProvider } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppoinmentBanner = ({date,setDate}) => {


    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full px-12">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <DayPicker
                    
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    /> 
                   
                    
                    </div>
                </div>
                </div>
        </div>
    );
};

export default AppoinmentBanner;