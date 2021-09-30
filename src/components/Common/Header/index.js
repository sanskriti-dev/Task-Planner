
import React from 'react';
import * as properties from '../../../mock/index'
import './index.scss' 
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {Select} from 'antd'


const {Option} = Select

const Header = (props) => {
  let assignee = properties.assignee
  let priority = properties.priority

  let handleSearch = (e) => {
    props.setSearchText(e.target.value)
    e.preventDefault();

  }
    
    return(
     <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
       <div className = "nav-items">
           <Input className = "search-nav" size="small" placeholder="Search Task" prefix={<SearchOutlined />} onChange = {handleSearch}  />
           <div className = 'filters'>
             <Select
                className ='filter-select'
                mode="tags"
                placeholder="Filter By Assignee"
                maxTagCount={1}
                //onChange={handleChange}
                >
                   {assignee.map(ele =>  <Option value = {ele.email}> {ele.firstName} {ele.lastName} </Option>)}
                 </Select>
             <Select
                mode="tags"
                className = 'filter-select'
                placeholder="Filter By Priority"
                maxTagCount={2}
                //onChange={handleChange}
                 >
                {priority.map(ele =>  <Option value = {ele.value}> {ele.name}</Option>)}
                 </Select>
            </div>
        </div>


      </nav>)
}

export default Header