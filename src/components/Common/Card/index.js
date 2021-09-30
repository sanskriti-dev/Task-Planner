import React from 'react';
import * as properties from '../../../mock/index'
import './index.scss'
import { EditOutlined } from '@ant-design/icons';

const Card = (props) => {
    const {title,priority,description,assignee} = props.task
    let user ={}
     properties.assignee.map(ele => {
         if(ele.email === assignee)
        {
            user.firstLetter = ele.firstName[0];
            user.lastLetter = ele.lastName[0];
       }})
    return (
        <div className = "card">
            <div className ="task-header">
            <span className= {`${priority.toLowerCase().replace(" ", "_")} priority`}>{priority}</span>
             <div className = "actions">
            <span className = "assignee"> {user.firstLetter}{user.lastLetter}</span>
            <button className = "edit"><EditOutlined/></button>
            </div>
            </div>
            <span className = "title">{title}</span>
            <span className = "description">{description}</span>
        </div>
    )
}

export default Card