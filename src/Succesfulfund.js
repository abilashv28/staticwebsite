import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import successimage from '../src/assets/logo192.png'
import React from 'react'

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function Succesfulfund() {
    return (
        <div>
            <div><h1 style={{ textAlign: 'center' }}>Succesfully Funded</h1></div>
            <div className='row'>
                <div className='col-md-4 alignment2'>
                <div><img src={successimage} alt="Success" /></div>

                    <h5>RIO global V</h5>
                    <h5>nearby to green airport</h5>
                    <hr></hr>
                    <label>4.5crore</label>
                </div>
                <div className='col-md-4 alignment2'>
                <div><img src={successimage} alt="Success" /></div>

                    <h5>RIO global V</h5>
                    <h5>nearby to green airport</h5>
                    <hr></hr>
                    <label>4.5crore</label>
                </div>
                <div className='col-md-4 alignment2'>
                <div><img src={successimage} alt="Success" /></div>

                    <h5>RIO global V</h5>
                    <h5>nearby to green airport</h5>
                    <hr></hr>
                    <label>4.5crore</label>
                </div>
            </div>
            <div className='successsection' style={{ background: 'black' }}>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'>
                        <image />
                        <h5>Kalpesh Chauhan</h5>
                        <h6>Roflin assest customer</h6>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-5'>
                        <div className='row alignment20'>
                            <div>
                                <FormatQuoteIcon/>
                            </div>
                            <div >
                            <label>I have invested more than 35 lakhs with riofin assets in all their assets, They provide on time returns. I have been with them over a year now.</label>
                            </div>
                            <div >
                            <FormatQuoteIcon style={{float:'right'}}/>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-1'></div>

                </div>
                <hr></hr>
                <div>
                    <button className='btnn-button'>Trust is earned</button>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <h1>
                            Our Happy Clients About Roflin Assets
                        </h1>
                        <hr></hr>
                    </div>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div className='row'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{height:'360px'}}> <div className='col-md-3 cardss'>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <img alt=''/>
                                </div>
                                <div className='col-md-6'>
                                    <h3>Mahesh</h3>
                                    <h5>CEO</h5>
                                </div>
                            </div>

                        </div>
                        </SwiperSlide>
                        <SwiperSlide style={{height:'360px'}}> <div className='col-md-3 cardss'>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <img alt=''/>
                                </div>
                                <div className='col-md-6'>
                                    <h3>Mahesh</h3>
                                    <h5>CEO</h5>
                                </div>
                            </div>

                        </div></SwiperSlide>
                        <SwiperSlide style={{height:'360px'}}>
                            <div className='col-md-3 cardss'>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <img alt=''/>
                                    </div>
                                    <div className='col-md-6'>
                                        <h3>Mahesh</h3>
                                        <h5>CEO</h5>
                                    </div>
                                </div>

                            </div></SwiperSlide>
                            <SwiperSlide style={{height:'360px'}}>
                            <div className='col-md-3 cardss'>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <img alt='' />
                                    </div>
                                    <div className='col-md-6'>
                                        <h3>Mahesh</h3>
                                        <h5>CEO</h5>
                                    </div>
                                </div>

                            </div></SwiperSlide>
                            <SwiperSlide style={{height:'360px'}}>
                            <div className='col-md-3 cardss'>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <img alt=''/>
                                    </div>
                                    <div className='col-md-6'>
                                        <h3>Mahesh</h3>
                                        <h5>CEO</h5>
                                    </div>
                                </div>

                            </div></SwiperSlide>
                            <SwiperSlide style={{height:'360px'}}>
                            <div className='col-md-3 cardss'>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <img alt=''/>
                                    </div>
                                    <div className='col-md-6'>
                                        <h3>Mahesh</h3>
                                        <h5>CEO</h5>
                                    </div>
                                </div>

                            </div></SwiperSlide>
                    </Swiper>


                </div>
            </div>
        </div>
    )
}
