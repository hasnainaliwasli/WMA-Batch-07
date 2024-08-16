import { Button, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { useAuthContext } from '../../context/AuthContext';

export default function ContactUs() {
  const [form] = Form.useForm();
  const { setIsAppLoading } = useAuthContext()


  const onFinish = (values) => {
    setIsAppLoading(true)

    // const { name, email, address, message } = values




    setTimeout(() => {
      form.resetFields();
      setIsAppLoading(false)

      window.toastify('Message Sent Successfully.!', 'success')
    }, 500);

  };

  return (
    <div className='card mt-3 container ' id='contactForm'>
      <Form
        form={form}
        name="contact_us"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your Full Name' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your Email Address!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please input your Address!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Please input your message!' }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item className="text-center">
          <Button type="primary" htmlType="submit" className='w-50'>
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
