import React from 'react';
import { Form, Input, Button, Select} from 'antd';

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
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Select>
        <Option>ABC</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Assignee"
        name="assignee"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Select>
        <Option>ABC</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Status"
        name="status"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Select>
        <Option>ABC</Option>
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