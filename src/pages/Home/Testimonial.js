import React from 'react';
import quote from '../../assets/icons/quote.svg'
const Testimonial = () => {
    return (
      <section className='px-12'>
        <div  class="flex justify-between items-center">
          <div>
            <h2>Testimonial</h2>
            <p>What Our Patients Says</p>
          </div>

          <figure>
            <img src={quote} alt="" />
          </figure>
        </div>
        <div></div>
      </section>
    );
};

export default Testimonial;