import React, { useState } from 'react';
import Board from '../Board';
import Header from '../Common/Header';
import './index.scss'
import {PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import CreateTask from '../Tasks/dependencies/Create';
import * as properties from '../../mock/index'
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const [isModalVisible,setIsModalVisible] = useState(false)
    const store = useSelector(state => state)
    const boards = store.boards
    console.log("BORADS",boards)
    
    return(
        <>
        <Header/>  
        <div className = "dashboard"> 
        <div className = 'boards'>
        {
            boards.map(ele => <Board key_name={ele.key} title= {ele?.title} tasks = {ele?.list}/>)
        }
        </div> 
        <button className='create-new' onClick = {() => setIsModalVisible(true)}><PlusOutlined /></button>   
        </div> 

        <Modal title="Create New Task" visible={isModalVisible} onCancel = {() => setIsModalVisible(false)} footer ={null} >
            <CreateTask/>
       </Modal>
        </>
        )
}

export default Dashboard;