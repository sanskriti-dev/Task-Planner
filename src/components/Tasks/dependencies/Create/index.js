import React from 'react';
import { Form, Input, Button, Select} from 'antd';
import * as properties from '../../../../mock'
import { useDispatch } from 'react-redux';
import { UPDATE_BOARD } from '../../../../store/actions/actionTypes';

const { Option } = Select;

const CreateTask = (props) => {

  const dispatch = useDispatch()
  const onFinish = (values) => {
    dispatch({type : UPDATE_BOARD,payload : values})
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
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your password!',
        //   },
        // ]}
      >
        <Select>
        {properties.priority.map(ele => <Option id = {ele.value}value = {ele.name}>{ele.name}</Option>)}       
        </Select>
      </Form.Item>
      <Form.Item
        label="Assignee"
        name="assignee"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your password!',
        //   },
        // ]}
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

    

      <Form.Item
        // wrapperCol={{
        //   offset: 8,
        //   span: 16,
        // }}
      >
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateTask