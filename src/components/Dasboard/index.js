import React, { useRef, useEffect, useState } from 'react';
import Board from '../Board';
import Header from '../Common/Header';
import './index.scss'
import {PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Modal, Tooltip } from 'antd';
import CreateTask from '../Tasks/dependencies/Create';
import { DragDropContext  } from "react-beautiful-dnd";
import { useDispatch, useSelector } from 'react-redux';
import { CANCEL_TASK, REORDER_BOARD, UPDATE_BOARD } from '../../store/actions/actionTypes';
import _  from 'lodash'
import { getBoardsFromLS, saveBoardsToLS } from '../../utils';

const Dashboard = () => {
    const store = useSelector(state => state)
    const {isEditTask} = store
    const [isModalVisible,setIsModalVisible] = useState(false)
    const [searchByfilter,setSearchByfilter] = useState({           //filter object
        searchText : '',
        priority : [],
        assignee: []
    })
    const [boards,setBoards] = useState()
    const dispatch = useDispatch()
    const createFormRef = useRef()

    useEffect(() => {
        if(getBoardsFromLS()?.length){
            dispatch({type:UPDATE_BOARD,payload :{"tasks": [],"boards": getBoardsFromLS() }})
        }

    },[])

    const onDragEnd =(e) => {
        if(e.destination?.droppableId && e.destination?.droppableId !== e.source?.droppableId)
        {
            let task;
            let boardsCopy = _.cloneDeep(store.boards)
            
            boardsCopy.map(ele => {
                if (ele.key === e.source.droppableId) {
                    task = ele.list.find(item => item.id === e.draggableId)
                    let taskIndex = ele.list.findIndex(item => item.id === e.draggableId)
                    ele.list.splice(taskIndex, 1)  //removed from previous board
                }
            })
            let updatedBoard = boardsCopy.map(ele => {
                if (ele.key === e.destination.droppableId) {
                    ele.list.splice(e.destination.index, 0, task);  //added in new Board
                }
                return ele
            })
            dispatch({type : REORDER_BOARD, payload : updatedBoard})  // update boards
        }
       
    }

    useEffect(() => {   
        const newBoard =_.cloneDeep(store.boards)
        setBoards(newBoard)
        saveBoardsToLS(newBoard)
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

    const handleOnCloseModal = () => {
        if(isEditTask)
         dispatch({type: CANCEL_TASK})
         setIsModalVisible(false)
         createFormRef.current.resetFields();
    }


    return(
        <>
        <Header filterBoard = {filterBoard} searchByfilter = {searchByfilter} />  
        <div className = "dashboard"> 
        <div className = "sideNav"> </div>
        <div className = 'boards'>
        <DragDropContext onDragEnd= {onDragEnd}>
        {boards?.map((ele,index) => <Board key = {`${index}-board`} key_name={ele.key} title= {ele.title} taskList = {ele.list}/>)}
         </DragDropContext>
        </div> 
       <Tooltip title = "Create New Task">
        <button className='create-new' onClick = {() => setIsModalVisible(true)}><PlusOutlined /></button>   
        </Tooltip>
        </div> 
        <Modal visible={isModalVisible} onCancel = {handleOnCloseModal} footer ={null} >
            <CreateTask setIsModalVisible= {setIsModalVisible} form ={createFormRef}/>
       </Modal>
        </>
        )
}

export default Dashboard;