import Select from 'rc-select';
import React from 'react';
import * as properties from '../../../mock/index'
import './index.scss' 

const {Option} = Select

const Header = () => {
  let assignee = properties.assignee
    
    return(
     <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
       {/* <Select placeholder = "Filter By Assignee">
         {assignee.map(ele => <Option value = {ele.email}>{ele.firstName} {ele.lastName}</Option>)}
         <Option value = "none">None</Option>
        
       </Select> */}
      </nav>)
}

export default Header