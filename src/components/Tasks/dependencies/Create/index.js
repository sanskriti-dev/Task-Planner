import React from 'react';
import { Form, Input, Button, Select} from 'antd';
import * as properties from '../../../../mock'

const { Option } = Select;

const CreateTask = (props) => {
  const onFinish = (values) => {
    console.log('Success:', values);
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
            message: 'Please input your username!',
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
            message: 'Please input your username!',
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
        {properties.priority.map(ele => <Option value = {ele.value}>{ele.name}</Option>)}       
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
        {properties.assignee.map(ele => <Option value = {ele.email}>{ele.name}</Option>)}
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