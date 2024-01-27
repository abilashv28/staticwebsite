import React from 'react'

export default function Headerr() {
  return (
    <div className='row header'>
      <div className='col-md-2'>
        <image />
      </div>
      <div className='col-md-6 header-nav'>
        <a href="https://example.com/rofin">Why Rofin</a>
        <a href="https://example.com/opp">Opp</a>
        <a href="https://example.com/founders">Founders</a>
        <a href="https://example.com/learn">Learn</a>

      </div>
      <div className='col-md-4 header-btn' >
        <button className='btn-button'>Login</button>
        <button className='btnn-button '>Sign Up</button>
      </div>
    </div>
  )
}
