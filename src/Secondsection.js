import React from 'react'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export default function Secondsection() {
    return (
        <div className='investor' style={{  height: '400px' }}>
            <div className='alignment2'>
                <h1 style={{ color: 'white' }}>What Is RIOFIN ASSESTS ?</h1>
                <div className='row'>
                    <div className='col-md-6'></div>
                    <div className='col-md-6'>
                        <hr></hr>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3 cards'>
                    <div><CheckCircleRoundedIcon /></div>
                    <h4>Poineers in Alternative Investment</h4>
                    <p>The process of managing a task through its life cycle. It involves planning, testing, tracking.</p>
                    <CheckCircleRoundedIcon />
                </div>
                <div className='col-md-3 cards'>
                    <CheckCircleRoundedIcon />
                    <h4>Poineers in Alternative Investment</h4>
                    <p>The process of managing a task through its life cycle. It involves planning, testing, tracking.</p>
                    <CheckCircleRoundedIcon />

                </div>
                <div className='col-md-3 cards'>
                    <CheckCircleRoundedIcon />
                    <h4>Poineers in Alternative Investment</h4>
                    <p>The process of managing a task through its life cycle. It involves planning, testing, tracking.</p>
                    <CheckCircleRoundedIcon />
                </div>
            </div>
        </div>
    )
}
