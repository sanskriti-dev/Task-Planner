import React, { useEffect, useState } from 'react';
import Board from '../Board';
import Header from '../Common/Header';
import './index.scss'
import {PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Modal, Tooltip } from 'antd';
import CreateTask from '../Tasks/dependencies/Create';
import { DragDropContext  } from "react-beautiful-dnd";
import { useDispatch, useSelector } from 'react-redux';
import * as properties from '../../mock/index'
import { REORDER_BOARD } from '../../store/actions/actionTypes';

const Dashboard = () => {
    const [isModalVisible,setIsModalVisible] = useState(false)
    const store = useSelector(state => state)
    const dispatch = useDispatch()
    let boards = store.boards
    const onDragEnd =(e) => {
        if(e.destination?.droppableId && e.destination?.droppableId !== e.source?.droppableId)
       dispatch({type : REORDER_BOARD, payload : e})
    }
    
    return(
        <>
        <Header/>  
        <div className = "dashboard"> 
        <div className = 'boards'>
        <DragDropContext onDragEnd= {onDragEnd}>
        {boards.map(ele => <Board key_name={ele.key} title= {ele.title} taskList = {ele.list}/>)}
         </DragDropContext>
        </div> 
       <Tooltip title = "Create New Task">
        <button className='create-new' onClick = {() => setIsModalVisible(true)}><PlusOutlined /></button>   
        </Tooltip>
        </div> 
        <Modal title="Create New Task" visible={isModalVisible} onCancel = {() => setIsModalVisible(false)} footer ={null} >
            <CreateTask setIsModalVisible= {setIsModalVisible}/>
       </Modal>
        </>
        )
}

export default Dashboard;