import React from 'react'
import { BackTop } from 'antd';
import { UpSquareTwoTone } from '@ant-design/icons';

import "./arrow.css"

const Arrow = () => {
    return (
        <>
            <BackTop style={{left: "5%"}}>
                <UpSquareTwoTone className="arrow" />
            </BackTop>
        </>
    )
}

export default Arrow
