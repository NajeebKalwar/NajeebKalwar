import React from 'react'
import './ui.css'
import service_1  from './service-1.svg'
import service_2  from './service-2.svg'
import service_3  from './service-3.svg'

function ui() {
  return (
    <>

        <div className='box container'>

        <div className='heading'>
            <h1>Our Services</h1>
        </div>

        <div className='innerbox'>

           <div className='servicesbox innerbox-1'>
            <img src={service_1} alt="" />
            <h1>Our services</h1>
            <br/>
            <p className='detail'>
            Fugiat occaecat cillum in .t nulla dolor aliquip esse et est minim. Elit in incididunt adipisicing consequat consectetur eu pariatur non amet amet incididunt irure.
            </p>
            </div> 
           <div className='servicesbox innerbox-2'>
           <img src={service_2} alt="" />
            <h1>Our services</h1>
            <br/>
            <p>
            Fugiat occaecat cillum in .t nulla dolor aliquip esse et est minim. Elit in incididunt adipisicing consequat consectetur eu pariatur non amet amet incididunt irure.
            </p>
            </div> 
           <div className='servicesbox innerbox-3'>
           <img src={service_3} alt="" />
            <h1>Our services</h1>
            <br/>
            <p>
            Fugiat occaecat cillum in .t nulla dolor aliquip esse et est minim. Elit in incididunt adipisicing consequat consectetur eu pariatur non amet amet incididunt irure.
            </p>
            </div> 

        </div>

        </div>


    </>

  )
}

export default ui