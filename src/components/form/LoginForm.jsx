import { Button, Form, Input } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/auth';

const LoginForm = () => {
   const isLoading = useSelector(state => state.auth?.isLoading);
   const dispatch = useDispatch();

   const onFinish = values => {
      dispatch(login(values));
   };

   return (
      <Form
         name='login'
         initialValues={{ remember: true }}
         onFinish={onFinish}
         style={{ maxWidth: 300, margin: '0 auto' }}
      >
         <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your Username!' }]}
         >
            <Input placeholder='Username' />
         </Form.Item>
         <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your Password!' }]}
         >
            <Input.Password placeholder='Password' />
         </Form.Item>
         <Form.Item>
            <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
               Log in
            </Button>
         </Form.Item>
      </Form>
   );
};

export default LoginForm;
