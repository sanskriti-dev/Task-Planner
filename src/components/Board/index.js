import React from 'react';
import './index.scss';
import Card from '../Common/Card'

const Board = (props) => {
     return(
         <div className={`board border-color-${props.key_name}`}>
            <div className='title'>
            {props.title}
            </div>
            <div>
                {props.taskList.map(ele => <Card task = {ele}/>)}
            </div>
         
         </div>
     )
}

export default Board