import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

import "./style.css"

const PopupWindow = ({modalActive, setModalActive}) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(false)
    const [description, setDescription] = useState("")
    const [error, setError] = useState(false)
    const titleRef = useRef()
    const descriptionRef = useRef()

    const sendData = () => {
        if (title.replace(/\s/g, '').length === 0 || description.replace(/\s/g, '').length === 0) {
            setError(true)
        } else {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                const newItem = {
                    title: title,
                    description: description
                }
                dispatch({ type: "POST", newItem: newItem })
                setTitle("")
                setDescription("")
                setModalActive(false)
            }, 1000)
        }
    }

    const pressKey = (e) => {
        if(e.keyCode === 13) {
            sendData()
        }
    }

    return (
        <div className="popup-container" onMouseDown={() => setModalActive(false)}>
            <div className="popup-window" onMouseDown={e => e.stopPropagation()}>
                <div className="exit" onClick={() => setModalActive(false)}>
                    ✘
                </div>
                <Form

                    layout="vertical"
                >
                    <Form.Item label="Title">
                        <input
                            ref={titleRef}
                            className={!error ? "" : "error"}
                            onKeyDown={(e) => pressKey(e)}
                            value={title}
                            onInput={(e) => setTitle(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                    >
                        <input
                            ref={descriptionRef}
                            className={!error ? "" : "error"}
                            onKeyDown={(e) => pressKey(e)}
                            value={description}
                            onInput={(e) => setDescription(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            style={{background: "#26EF69", border: "#26EF69"}}
                            loading={loading}
                            icon={<PoweroffOutlined />}
                            onClick={sendData}
                            ghost>
                            ADD POST
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default PopupWindow