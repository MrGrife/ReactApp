import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, Input } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { CSSTransition } from 'react-transition-group';
import { postData } from '../../services/services'

import "./style.css"

const PopupWindow = ({modalActive, setModalActive}) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const buttonForm = useRef()
    const [form] = Form.useForm()

    const sendData = (data) => {
        setLoading(true)
        dispatch(postData(data.title, data.description))
        setModalActive(false)
        form.resetFields()
        setLoading(false)
    }

    const handleKeyUp = (e) => {
        if(e.keyCode === 13) {
            buttonForm.current.click()
        }
    }

    return (
      <CSSTransition
        in={modalActive}
        timeout={500}
        classNames="popup-container"
        unmountOnExit
      >
        <div className="popup-container" onMouseDown={() => setModalActive(false)}>
            <div className="popup-window" onMouseDown={e => e.stopPropagation()}>
                <div className="exit" onClick={() => setModalActive(false)}>
                    ✘
                </div>
                <Form
                    form={form}
                    onFinish={sendData}
                    onKeyUp={handleKeyUp}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: "Please input title!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Description"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            htmlType="submit"
                            ref={buttonForm}
                            style={{background: "#26EF69", border: "#26EF69"}}
                            loading={loading}
                            icon={<PoweroffOutlined />}
                            ghost>
                            ADD POST
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
      </CSSTransition>
    )
}

export default PopupWindow
