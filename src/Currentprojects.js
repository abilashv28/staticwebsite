import BoltRoundedIcon from '@mui/icons-material/BoltRounded';

import React from 'react'

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function Currentprojects() {
    return (
        <div style={{height: '600px',padding:'60px 0px'}}>
            <div className='row'>
                <div className='col-md-4' style={{ padding: '0px 60px' }}>
                    <h1>Our Current Projects</h1>
                    <hr></hr>
                    <div className='thunder'>
                        <BoltRoundedIcon style={{ color: '#4363FC' }} />
                        <h4 style={{ color: '#4363FC' }}>Funding is filling fast</h4>
                    </div>
                    <div className='thunder'>
                        <BoltRoundedIcon style={{ color: '#4363FC' }} />
                        <h4 style={{ color: '#4363FC' }}>Higher returns on the go</h4>
                    </div>


                </div>
                <div className='col-md-8 alignment12 carousel'>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><div className='row design'>
                            <div className='col-md-4'></div>
                            <div className='col-md-8' style={{ background: 'black' }}>
                                <label>Real estate</label>
                                <h3>CRE-||</h3>
                                <h4>Mappedu</h4>
                                <p>An extensive network of investors spread throughout the country, encompassing diverse regions and markets</p>
                                <div><button className='investnow'>INVEST NOW</button></div>
                                <div><button className='talktous'>TALK TO US</button></div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className='row design'>
                            <div className='col-md-4'></div>
                            <div className='col-md-8' style={{ background: 'black' }}>
                                <label>Real estate</label>
                                <h3>CRE-||</h3>
                                <h4>Mappedu</h4>
                                <p>An extensive network of investors spread throughout the country, encompassing diverse regions and markets</p>
                                <div><button className='investnow'>INVEST NOW</button></div>
                                <div><button className='talktous'>TALK TO US</button></div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>
                            <div className='row design'>
                                <div className='col-md-4'></div>
                                <div className='col-md-8' style={{ background: 'black' }}>
                                    <label>Real estate</label>
                                    <h3>CRE-||</h3>
                                    <h4>Mappedu</h4>
                                    <p>An extensive network of investors spread throughout the country, encompassing diverse regions and markets</p>
                                    <div><button className='investnow'>INVEST NOW</button></div>
                                    <div><button className='talktous'>TALK TO US</button></div>
                                </div>
                            </div></SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </div>
    )
}
