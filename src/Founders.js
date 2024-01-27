import React from 'react'
import successimage from '../src/assets/logo192.png'

export default function Founders() {
    return (
        <div>
            <div>
                <h1 style={{ textAlign: 'center' }}>Meet Our Founders</h1>
                <div className='row'>
                    <div className='col-md-6'></div>
                    <div className='col-md-6'>
                        <hr></hr>
                    </div>

                </div>
            </div>
            <div className='row'>
                <div className='col-md-4 alignment2'>
                    <div><img src={successimage} alt="Success" /></div>
                    <h4>VENKATESAN</h4>
                    <h4>coo</h4>
                </div>
                <div className='col-md-4 alignment2'>
                    <img src={successimage} alt="Success" />
                    <h4>VENKATESAN</h4>
                    <h4>coo</h4>
                </div>
                <div className='col-md-4 alignment2'>
                    <img src={successimage} alt="Success" />
                    <h4>VENKATESAN</h4>
                    <h4>coo</h4>
                </div>

            </div>
        </div>
    )
}
