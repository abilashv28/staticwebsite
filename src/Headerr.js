import React from 'react'

export default function Headerr() {
  return (
    <div className='row header'>
        <div className='col-md-2'>
            <image/>
        </div>
        <div className='col-md-6 header-nav'>
            <a> why Rofin</a>
            <a>opp</a>
            <a>Founders</a>
            <a>Learn</a>
        </div>
        <div className='col-md-4 header-btn' >
            <button className='btn-button'>Login</button>
            <button>Sign Up</button>
        </div>
    </div>
  )
}
