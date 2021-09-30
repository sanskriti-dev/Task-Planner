import React from 'react';
import './index.scss';
import Card from '../Common/Card'
import {Droppable, Draggable } from "react-beautiful-dnd";
import * as properties from './../../mock/index'


const Board = (props) => {
    let droppableId ;
    properties.status.map(ele => {
        if(ele.value === props.key_name )
          droppableId = ele.value})
     return(
         <div className={`board border-color-${props.key_name}`}>
            <div className='title'>
            {props.title}
            </div>
            <Droppable droppableId = {droppableId}>
            
            {(provided, snapshot) => (
              <div
            ref={provided.innerRef}
            >

                {props.taskList.map((ele,index) => 
                  <Draggable
                  draggableId={ele.id}
                  index={index}>
                  {(provided, snapshot) => (
                      <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                
                <Card task = {ele}/> 
                </div>)}
                </Draggable>
                
                )}
            
            </div>)}
            </Droppable>
             
         
         </div>
     )
}

export default Board