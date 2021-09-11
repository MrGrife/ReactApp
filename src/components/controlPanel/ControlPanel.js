import React, { useState } from 'react'
import MyButton from "../buttonComponent/MyButton"
import PopupWindow from '../popupWindow/PopupWindow'

import "./style.css"

const ControlPanel = () => {
    const [modalActive, setModalActive] = useState(false)
    
    return (
        <header>
            <MyButton onClick={() => setModalActive(true)}>
                CREATE NEW POST
            </MyButton>
            {modalActive && <PopupWindow modalActive={modalActive} setModalActive={setModalActive} />}
        </header>
    )
}

export default ControlPanel