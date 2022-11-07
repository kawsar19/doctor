import React from 'react';

const Buttons = ({text}) => {
    return (
        <>
            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">{text}</button>
        </>
    );
};

export default Buttons;