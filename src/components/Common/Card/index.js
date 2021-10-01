import React from 'react';
import * as properties from '../../../mock/index'
import './index.scss'
import { EditOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useDispatch } from 'react-redux';
import { EDIT_TASK } from '../../../store/actions/actionTypes';

const Card = (props) => {
    const {title,priority,description,assignee} = props.task
    const dispatch = useDispatch()
    let user ={}
     properties.assignee.map(ele => {
         if(ele.email === assignee)
        {
            user.firstName = ele.firstName;
            user.lastName= ele.lastName;
       }})
       const handleEdit = () => {
           console.log("INS")
           dispatch({type: EDIT_TASK,payload: props})
       }
    return (
        <div className = "card">
            <div className ="task-header">
          <Tooltip title = {`${priority} Priority`}>  <span className= {`${priority.toLowerCase()} priority`}>{priority}</span> </Tooltip>
             <div className = "actions">
             <Tooltip title = {`${user.firstName} ${user.lastName}`}> <span className = "assignee"> {user.firstName[0]}{user.lastName[0]}</span> </Tooltip>
            <button className = "edit" onClick = {handleEdit}><EditOutlined/></button>
            </div>
            </div>
            <span className = "task-title">{title}</span>
            <span className = "description">{description}</span>
        </div>
    )
}

export default Card