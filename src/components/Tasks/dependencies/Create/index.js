import React, { useRef } from 'react';
import { Form, Input, Button, Select, notification } from 'antd';
import * as properties from '../../../../mock'
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_BOARD } from '../../../../store/actions/actionTypes';
import _ from 'lodash'

const { Option } = Select;

const CreateTask = (props) => {
  const dispatch = useDispatch()
  const form = useRef()
  const store = useSelector(store => store)
  const {isEditTask, editTaskDetails,editTaskId}  = store

  const onFinish = (values) => {
    
    let newTasks = [...store.tasks]
    let boards = _.cloneDeep(store.boards)
    let newTaskLength = newTasks.length;
    let newBoards = []

    if (isEditTask) {
      values.id = editTaskId
      newBoards = boards.map(ele => {
        let taskIndex = ele.list.findIndex(item => item.id === editTaskId)
        if (taskIndex !== -1)
          ele.list.splice(taskIndex, 1)
      })

      newBoards = boards.map(ele => {
        if (ele.key === values.status)
          ele.list.push(values)
        return ele
      })
    }
    else {
      values.id = "task " + newTaskLength
      newBoards = boards.map(ele => {
        if (ele.key === values.status)
          ele.list.push(values)
        return ele
      })
      newTasks.push(values)
      props.setIsModalVisible(false)

    }

    let data = {
      boards: newBoards,
      tasks: newTasks
    }
    dispatch({ type: UPDATE_BOARD, payload: data })
    form.current.resetFields()
    notification['success']({
      message: <strong>Verification Successful</strong>,
      description:
          'Your email has been verified successfully',
    });


  };

  const onFinishFailed = (errorInfo) => {
    form.current.resetFields()
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="form"
      initialValues={editTaskDetails}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      ref = {form}
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
        defaultValue = {editTaskDetails?.title}
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
        vadefaultValuelue = {editTaskDetails?.description}

      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Priority"
        name="priority"
        defaultValue = {editTaskDetails?.priority}
      >
        <Select>
          {properties.priority.map(ele => <Option id={ele.value} value={ele.name}>{ele.name}</Option>)}
        </Select>
      </Form.Item>
      <Form.Item
        label="Assignee"
        name="assignee"
        defaultValue = {editTaskDetails?.assignee}
      >
        <Select>
          {properties.assignee.map(ele => <Option value={ele.email}>{ele.firstName} {ele.lastName}</Option>)}
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
        defaultValue = {editTaskDetails?.status}
      >
        <Select>
          {properties.status.map(ele => <Option value={ele.value}>{ele.name}</Option>)}
        </Select>
      </Form.Item>



      <Form.Item >
        <Button type="primary" htmlType="submit">
          {isEditTask ? "Save" : "Create"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateTask