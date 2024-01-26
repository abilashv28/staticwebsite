import React from 'react'
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';

export default function Currentprojects() {
    return (
        <div>
            <div className='row'>
                <div className='col-md-4' style={{ padding: '0px 60px' }}>
                    <h1>Our Current Projects</h1>
                    <hr></hr>
                    <div className='thunder'>
                        <BoltRoundedIcon style={{color:'#4363FC'}}/>
                        <h4 style={{color:'#4363FC'}}>Funding is filling fast</h4>
                    </div>
                    <div className='thunder'>
                        <BoltRoundedIcon style={{color:'#4363FC'}}/>
                        <h4 style={{color:'#4363FC'}}>Higher returns on the go</h4>
                    </div>

                    
                </div>
                <div className='col-md-8 alignment12'>
                    <div className='row'>
                        <div className='col-md-4'></div>
                        <div className='col-md-8'>
                            <label>Real estate</label>
                            <h3>CRE-||</h3>
                            <h4>Mappedu</h4>
                            <p>An extensive network of investors spread throughout the country, encompassing diverse regions and markets</p>
                            <button>INVEST NOW</button>
                            <button>TALK TO US</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'></div>
                        <div className='col-md-8'>
                            <label>Real estate</label>
                            <h3>CRE-||</h3>
                            <h4>Mappedu</h4>
                            <p>An extensive network of investors spread throughout the country, encompassing diverse regions and markets</p>
                            <button>INVEST NOW</button>
                            <button>TALK TO US</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'></div>
                        <div className='col-md-8'>
                            <label>Real estate</label>
                            <h3>CRE-||</h3>
                            <h4>Mappedu</h4>
                            <p>An extensive network of investors spread throughout the country, encompassing diverse regions and markets</p>
                            <button>INVEST NOW</button>
                            <button>TALK TO US</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
