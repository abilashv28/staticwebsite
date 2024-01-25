import React from 'react'

export default function Investor() {
  return (
    <div>
        <div><h1 style={{textAlign:'center'}}>Investor's Academy</h1></div>
        <div className='row'>
            <div className='col-md-6'></div>
            <div className='col-md-6'><hr></hr></div>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <div>
                    <image/>
                    <label>At Rioflin</label>
                    <h3>Our Selection Process At Rioflin Looks Like...</h3>
                    <button className='btn-button'>Read More</button>
                </div>
            </div>
            <div className='col-md-6'>
            <div>
                    <image/>
                    <label>At Rioflin</label>
                    <h3>Our Selection Process At Rioflin Looks Like...</h3>
                    <button className='btn-button'>Read More</button>
                </div>
                <div>
                    <image/>
                    <label>At Rioflin</label>
                    <h3>Our Selection Process At Rioflin Looks Like...</h3>
                    <button className='btn-button'>Read More</button>
                </div>
            </div>

        </div>
        <div className='row alignment6' style={{background:'black',height: '400px'}}>
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
