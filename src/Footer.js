import React from 'react'

export default function Footer() {
  return (
    <div className='footer' style={{background: "#04003D"}}>
        <div className='row'>
            <div className='col-md-3'>
                <h3>Rioflin Assets</h3>
                <label>Poineers in Alternative Investment</label>
            </div>
            <div className='col-md-3 alignment5'>
                <h4>Company</h4>
                <a>About us</a>
                <a>Opportunities</a>
                <a>Team</a>
                <a>Learn</a>

            </div>
            <div className='col-md-3 alignment5'>
            <h4>Resources</h4>
                <a>Blogs</a>
                <a>Videos</a>
                <a>Guides</a>
                <a>Sample docs</a>

            </div>
            <div className='col-md-3'>
                <h4>Join Our NewsLetter</h4>
                <div className='alignment8'>
                <input className='form-control' placeholder='your email address' style={{padding: '20px'}}/>
                <button className='btn-button'>Subscribe</button>
                </div>
            </div>

        </div>
        <hr></hr>
        <h5 style={{textAlign: "center"}}>copyrights @ Rioflin Assests 2023.All Rights Reserved</h5>
    </div>
  )
}
