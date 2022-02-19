import React from 'react';
import AnalogueClock from 'react-analogue-clock';
import './Clock.css';


function Clock() {
    const clockOptions = {
        baseColor: '#160938',
        borderColor: '#ffffff',
        borderWidth: 5,
        centerColor: '#ffffff',
        handColors: {
            hour: '#ffffff',
            minute: '#ffffff',
            second: '#ffffff',
        },
        notchColor: '#ffffff',
        numbersColor: '#ffffff',
        showNumbers: true,
        size: 300
    }
  return (
    <div className='d-flex justify-content-center p-5'>
        <AnalogueClock {...clockOptions} />
    </div>
  )
}

export default Clock