import { Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';

export default function Cart() {
  const [adres, setAdres] = useState('')
  const [form] = Form.useForm();
  const [subTotal, setSubTotal] = useState(0)
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  useEffect(() => {
    const getCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(getCart)

    const total = getCart.reduce((acc, item) => acc + item.totalPrice, 0)
    setSubTotal(total)
  }, [])



  const plusCart = () => {
    console.log('subTotal', subTotal);
  }
  const minusCart = () => {
    console.log('subTotal', subTotal);
  }

  const proceedHandle = () => {

  }


  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {

    if (!adres) {
      return window.toastify('Enter full address to proceed', 'error')
    }
    else {
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
        form.resetFields();
        setCart([])
        localStorage.setItem('cart', JSON.stringify([]))
        return window.toastify('Order Placed', 'success')

      }, 2000);
    }
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
    form.resetFields();
    return window.toastify('Order Canceled', 'warning')
  };

  return (
    <div className='container'>
      <h1 className='text-white text-center mt-4 '>Your Cart</h1>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <>
              <div key={index} className='mb-3 text-white container text-center'>

                <strong>{item.quantity}</strong> {item.title}
                <button className='ms-4 btn btn-primary btn-sm me-2' onClick={minusCart}>  - </button>
                <strong>Rs:</strong> {item.totalPrice} <button className='ms-4 btn btn-primary btn-sm me-2' onClick={plusCart}>+</button>
              </div>
              <hr />
            </>
          ))}

          <hr className='text-white' />

          <h1 className='text-white text-center'>Total Bill: {subTotal}</h1>
          <div className='d-flex justify-content-center'>
            <button className='btn btn-danger mb-4 mt-1' onClick={showModal}>Proceed to Checkout</button>
          </div>

        </>
      ) : (
        <h4 className='text-white text-center mt-5 pt-5'>Your cart is empty.</h4>
      )}


      <>


        <Modal
          title="Confirm"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <h3> You have to Pay : {subTotal}</h3>
          <Form
            form={form}
            layout="vertical"
          >
            <Form.Item
              label="Delivery Address"
              name="address"
              rules={[{ required: true, message: 'Please input your Full address' }]}
            >
              <Input onChange={(e) => setAdres(e.target.value)} />
            </Form.Item>
          </Form>
        </Modal>

      </>
    </div>
  );
}
