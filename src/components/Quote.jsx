import React from 'react';
import './Quote.css';

function Quote(props) {
  return (
    <div className='Quote'>
        <blockquote>{props.bquote}</blockquote>
                <cite>{props.cite}</cite>
    </div>
  )
}

export default Quote