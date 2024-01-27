import React from 'react'

export default function Thirdsection() {
    return (
        <div style={{background:'#000',height:'600px'}}>
            <div className='alignment2'>
                <h2 style={{color:'white'}}>Why To Invest Beyond Traditional Assets</h2>
                <label style={{ marginBottom: '40px',color:'white' }}>Check out the Pros & Cons</label>
            </div>

            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8' style={{ background: 'white',borderRadius: '10px',boxShadow: '10px 10px #3D5FFE', height: '400px'}}>
                    <div className='row' style={{padding:'25px 20px'}}>
                        <div className='col-md-3'></div>
                        <div className='col-md-6 alignment' >
                            <label>Fixed deposit</label>
                            <label>Stock Market</label>
                            <label>Gold</label>
                            <label>Gold</label>
                        </div>
                        <div className='col-md-3'></div>

                        <div className='row'>
                            <div className='col-md-6'></div>
                            <div className='col-md-6 alignment3'>
                                <h1>Fixed Deposit</h1>
                                <p >
                                    Alternative investments offer higher returns. diversification, inflation protection, tax advantages, and access to unique opportunities compared to fixed deposits.
                                </p>
                                <button className='btn-button'>Get started with Riofin</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-2'></div>

            </div>
        </div>
    )
}
