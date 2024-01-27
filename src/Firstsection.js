import React from 'react'

export default function Firstsection() {
    return (
        <div>
            <div className='row' style={{ height: '500px', background: '#000' }}>
                <div className='col-md-4 first-image'>
                    <label style={{ color: '#00FF01' }}>Welcome the future Awaits You</label>
                    <h3 className="invest-font" style={{ color: 'white' }}>Invest Beyond</h3>
                    <h1 className="bond-font" >BONDS</h1>
                    <p style={{ color: 'white' }}>Embark On A Journey Into Alternative Investment With Returns Starting From 18%</p>
                    <button className='btn-button '>Explore Opportunities</button>
                </div>
                <div className='col-md-8'>

                </div>
            </div>
            <div className='row' style={{padding:'15px 0px'}}>
                <div className='col-md-3 alignmentexp'>
                    <h2>23+</h2>
                    <div>years of experience</div>
                </div>
                <div className='col-md-3 alignmentexp'>
                    <h2>23+</h2>
                    <div>years of experience</div>
                </div>
                <div className='col-md-3 alignmentexp'>
                    <h2>23+</h2>
                    <div>years of experience</div>
                </div>
                <div className='col-md-3 alignmentexp'>
                    <h2>23+</h2>
                    <div>years of experience</div>
                </div>
            </div>
        </div>
    )
}
