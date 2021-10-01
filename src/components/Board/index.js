import React, { useState } from "react";
import "./index.scss";
import Card from "../Common/Card";
import { Droppable, Draggable } from "react-beautiful-dnd";
import * as properties from "./../../mock/index";

const Board = (props) => {
  let droppableId;
  const [isdraggingOverList, setIsDraggingOverList] = useState(false);
  properties.status.map((ele) => {
    if (ele.value === props.key_name) droppableId = ele.value;
  });

  let changeListBackground = (isDraggingOver) => {
    setIsDraggingOverList(isDraggingOver);
  };
  return (
    <div
      className={`board border-color-${props.key_name} ${
        isdraggingOverList ? "draggablebg" : null
      } `}
    >
      <div className="title">{props.title}</div>
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            onClick={changeListBackground(snapshot.isDraggingOver)}
          >
            <div className="card-body">
              {props.taskList.map((ele, index) => (
                <Draggable key ={ele.id} draggableId={ele.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card task={ele} />
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Board;