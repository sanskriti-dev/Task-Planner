import React from 'react';
import Board from '../Board';
import Header from '../Common/Header';
import './index.scss'
import {PlusOutlined } from '@ant-design/icons';

const Dashboard = () => {
    const boards = [{
        title : "Backlog",
        key: 'backlog',
        list : []
    },
    {
        title : "In Progress",
        key : 'inProgress',
        list : []
    },
    {
        title : "Review",
        key : 'review',
        list : []
    },
    {
        title : "Complete",
        key : 'complete',
        list : []
    }
    ]

    return(
        <>
        <Header/>  
        <div className = "dashboard"> 
        <div className = 'boards'>
        {
            boards.map(ele => <Board key_name={ele.key} title= {ele?.title} tasks = {ele?.list}/>)
        }
        </div> 
        <div className = 'create-new'>
        <PlusOutlined /> 
        </div>   
        </div> 
        </>
        )
}

export default Dashboard;