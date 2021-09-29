import React from 'react';
import './index.scss'

const Board = (props) => {
     return(
         <div className={`board border-color-${props.key_name}`}>
            <div className='title'>
            {props.title}
            </div>
         
         </div>
     )
}

export default Board