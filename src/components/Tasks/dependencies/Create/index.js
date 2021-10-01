import React from 'react';
import { Form, Input, Button, Select} from 'antd';
import * as properties from '../../../../mock'
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_BOARD } from '../../../../store/actions/actionTypes';
import { updateBoard } from '../../../../store/actions';
import _ from 'lodash'

const { Option } = Select;

const CreateTask = (props) => {

  const dispatch = useDispatch()
  const store = useSelector(store => store)
  const onFinish = (values) => {

          let newTasks = [...store.tasks]
            let boards = _.cloneDeep(store.boards)
            let newTaskLength = newTasks.length;
             values.id = "task " + newTaskLength
            let newboards = boards.map(ele => {
                if(ele.key === values.status)
                ele.list.push(values)
                return ele
            })
            newTasks.push(values)

            let data = {
              boards :newboards,
              tasks : newTasks
            }      
    dispatch({type : UPDATE_BOARD , payload : data})
    props.setIsModalVisible(false)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="Create/Edit Task"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please enter the title!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: 'Please enter the description!',
          },
        ]}
      >
          <Input.TextArea />
      </Form.Item>

    <Form.Item
        label="Priority"
        name="priority"
      >
        <Select>
        {properties.priority.map(ele => <Option id = {ele.value}value = {ele.name}>{ele.name}</Option>)}       
        </Select>
      </Form.Item>
      <Form.Item
        label="Assignee"
        name="assignee"
      >
        <Select>
        {properties.assignee.map(ele => <Option  value = {ele.email}>{ele.firstName} {ele.lastName}</Option>)}
        </Select>
      </Form.Item>

      <Form.Item
        label="Status"
        name="status"
        rules={[
          {
            required: true,
            message: 'Please select the status',
          },
        ]}
      >
        <Select>
        {properties.status.map(ele => <Option value = {ele.value}>{ele.name}</Option>)}
        </Select>
      </Form.Item>

    

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateTask