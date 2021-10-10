import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useInput from '../../hooks/useInput'
import NavLink from "../UI/navItem/navItem"
import { changePost } from "../../services/services"
import { deletePost } from '../../services/services'

import "./style.css"

const Item = ({value, idELem}) => {
    const dispatch = useDispatch()
    const { inputValue, onInput, setValue } = useInput()
    const [edit, setEdit] = useState(false)
    const { itemList } = useSelector(state => state)

    const removeItem = () => {
        dispatch(deletePost(itemList, idELem))
    }

    const changeItem = () => {
        setValue(value.title)
        setEdit(!edit)
    }

    const changeItemValue = () => {
        if(Boolean(inputValue)) {
            dispatch(changePost(idELem, inputValue))
        } else {
            removeItem()
        }
        setEdit(!edit)
    }

    const ChangeElements = () => {
        if(edit){
            return (
                <div>
                    <i onClick={changeItemValue} className="fas fa-check"></i>
                    <i onClick={changeItem} className="red fas fa-times"></i>
                </div>
            )
        } else {
            return <i onClick={changeItem} className="edit-icon fas fa-pencil-alt"></i>
        }
    }

    return (
        <div className="item-content">
            <div className="main-item-content">
                {
                    edit ? <input style={{width: "100%"}} onInput={onInput} id="item-input" type="text" defaultValue={value.title} /> : <div>{value.title}</div>
                }
                { value.body && <NavLink itemId={idELem} /> }
            </div>
            <div className="icons">
                <ChangeElements/>
                <i onClick={removeItem} className="red fas fa-trash-alt"></i>
            </div>
        </div>
    )
}

export default Item