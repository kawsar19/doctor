import React from 'react'
import Appoinment from './Appoinment'
import Banner from './Banner'
import Exceptional from './Exceptional'
import Info from './Info'
import Services from './Services'
import Testimonial from './Testimonial'


function Home() {
  return (
    <div>

      <Banner/>
      <Info/>
      <Services/>
      <Exceptional/>
      <Appoinment/>
      <Testimonial/>
    </div>
  )
}

export default Home