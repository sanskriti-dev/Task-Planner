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
import _  from 'lodash'

const Dashboard = () => {
    const store = useSelector(state => state)
    const {isEditTask} = store

    const [isModalVisible,setIsModalVisible] = useState(false)
    const [searchByfilter,setSearchByfilter] = useState({
        searchText : '',
        priority : [],
        assignee: []
    })
    const [boards,setBoards] = useState()
    const dispatch = useDispatch()
    const onDragEnd =(e) => {
        if(e.destination?.droppableId && e.destination?.droppableId !== e.source?.droppableId)
        dispatch({type : REORDER_BOARD, payload : e})
    }

    useEffect(() => {   
        const newBoard =_.cloneDeep(store.boards)
        setBoards(newBoard)
    },[store.boards])

    useEffect(() => {
        setIsModalVisible(isEditTask)
    },[isEditTask])

    const filterBoard = (filters) => {
        let newBoard =_.cloneDeep(store.boards)
        newBoard = newBoard.map(ele => {
            ele.list = ele.list.filter(x => x.title.toLowerCase().includes(searchByfilter.searchText.toLowerCase()))
            .filter(y => searchByfilter.priority?.length ? searchByfilter.priority.includes(y.priority.toLowerCase()) : y)
            .filter(z => searchByfilter.assignee?.length ? searchByfilter.assignee.includes(z.assignee) : z)
          return ele
        })
        setBoards(newBoard)
        setSearchByfilter(filters)

    }


    return(
        <>
        <Header filterBoard = {filterBoard} searchByfilter = {searchByfilter} />  
        <div className = "dashboard"> 
        <div className = "sideNav"> </div>
        <div className = 'boards'>
        <DragDropContext onDragEnd= {onDragEnd}>
        {boards?.map(ele => <Board key_name={ele.key} title= {ele.title} taskList = {ele.list}/>)}
         </DragDropContext>
        </div> 
       <Tooltip title = "Create New Task">
        <button className='create-new' onClick = {() => setIsModalVisible(true)}><PlusOutlined /></button>   
        </Tooltip>
        </div> 
        <Modal visible={isModalVisible} onCancel = {() => setIsModalVisible(false)} footer ={null} >
            <CreateTask setIsModalVisible= {setIsModalVisible} />
       </Modal>
        </>
        )
}

export default Dashboard;