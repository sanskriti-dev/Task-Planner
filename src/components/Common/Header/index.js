
import React from 'react';
import * as properties from '../../../mock/index'
import './index.scss' 
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {Select} from 'antd'


const {Option} = Select

const Header = (props) => {

  const assignee = properties.assignee
  const priority = properties.priority

  const handleChange = (e,filter) => {
    let filters = props.searchByfilter
    switch(filter) {
      case "SearchText" :  filters.searchText = e.target.value
      e.preventDefault();
      break;
      case "Assignee" : filters.assignee = e
      break;
      case "Priority" : filters.priority = e
      break;
      
    }
    props.filterBoard(filters)
  }
    
    return(
     <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
       <div className = "nav-items">
           <Input className = "search-nav" size="small" placeholder="Search Task By Title" prefix={<SearchOutlined />} onChange = {(e) => handleChange(e,"SearchText")}  />
           <div className = 'filters'>
             <Select
                className ='filter-select assignee-filter'
                mode="tags"
                placeholder="Filter By Assignee"
                maxTagCount={2}
                onChange = {(e) => handleChange(e,"Assignee")}>
                   {assignee.map((ele,index) =>  <Option key={`assignee-${index}`} value = {ele.email}> {ele.firstName} {ele.lastName} </Option>)}
                 </Select>
             <Select
                mode="tags"
                className = 'filter-select'
                placeholder="Filter By Priority"
                maxTagCount={2}
                onChange = {(e) => handleChange(e,"Priority")}
                 >
                {priority.map((ele,index) =>  <Option key={`priority-${index}`} value = {ele.value}> {ele.name}</Option>)}
                 </Select>
            </div>
        </div>


      </nav>)
}

export default Header