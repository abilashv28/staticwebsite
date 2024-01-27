import React from 'react'
import successimage from './assets/logo192.png'

export default function Investor() {
  return (
    <div>
        <div className='investor' style={{padding: "60px 30px"}}>
        <div><h1 style={{textAlign:'center',color: 'white'}}>Investor's Academy</h1></div>
        <div className='row'>
            <div className='col-md-6'></div>
            <div className='col-md-6'><hr></hr></div>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <div className='investor-card alignment10' style={{height:'450px'}}>
                <div><img src={successimage} alt="Success" /></div>
                    <label>At Rioflin</label>
                    <h3>Our Selection Process At Rioflin Looks Like...</h3>
                    <button className='btn-button'>Read More</button>
                </div>
            </div>
            <div className='col-md-6'>
            <div className='investor-card'>
                <div className='alignment9'>
                <div><img src={successimage} alt="Success" /></div>
                    <div><label>At Rioflin</label>
                    <h3>Our Selection Process At Rioflin Looks Like...</h3>
                    <button className='btn-button'>Read More</button></div>
                </div>   
                </div>
                <div className='investor-card' style={{marginTop: "10%"}}>
                <div className='alignment9'>
                <div><img src={successimage} alt="Success" /></div>
                    <div><label>At Rioflin</label>
                    <h3>Our Selection Process At Rioflin Looks Like...</h3>
                    <button className='btn-button'>Read More</button></div>
                </div>   
                </div>
                
            </div>

        </div>
        </div>
        <div className='row alignment6' style={{background:'black',height: '500px'}}>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
                <div className='alignment2 portfolio'>
                    <h1>Let's build a Stronger portfolio</h1>
                    <button className='btn-button'>Talk to Our Investment Specialist</button>
                </div>
            </div>
            <div className='col-md-2'></div>
        </div>
    </div>
  )
}
