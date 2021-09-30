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
import { REORDER_BOARD } from '../../store/actions/actionTypes';

const Dashboard = () => {
    const [isModalVisible,setIsModalVisible] = useState(false)
    const store = useSelector(state => state)
    const [searchText,setSearchText] = useState('')
    const [filterByAssignee ,setfilterByAssignee] = useState([])
    const [filterByPriority ,setfilterByPriority] = useState([])
    const [boards,setBoards] = useState(Object.assign(store.boards))
    const dispatch = useDispatch()
    const onDragEnd =(e) => {
        if(e.destination?.droppableId && e.destination?.droppableId !== e.source?.droppableId)
        dispatch({type : REORDER_BOARD, payload : e})
    }

    useEffect(() => {
        console.log("Search Text",searchText)
        let boardsSortedBySearch = store.boards
        let boards = boardsSortedBySearch.map(ele => {
            ele.list = ele.list.filter(i => i.title.includes(searchText.toLowerCase().trim()))
            return ele
        })
        setBoards(boards)
        console.log("BOards",boards,store.boards)

    },[searchText])
    


    return(
        <>
        <Header setfilterByAssignee = {setfilterByAssignee} setfilterByPriority = {setfilterByPriority} setSearchText = {setSearchText}/>  
        <div className = "dashboard"> 
        <div className = "sideNav"> </div>
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