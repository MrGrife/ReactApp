import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useInput } from '../hooks'
import NavLink from "../navItem/navItem"

import "./style.css"

const Item = ({value, idELem, id}) => {
    // console.log(id);
    const dispatch = useDispatch()
    const { inputValue, onInput, setValue } = useInput()
    const [edit, setEdit] = useState(false)
    const { itemList } = useSelector(state => state)

    const removeItem = () => {
        const idx = itemList.findIndex((item) => item.id === idELem)
        
        const newArray = [
            ...itemList.slice(0, idx),
            ...itemList.slice(idx + 1)
        ]

        dispatch({type: "DELETE", newItemList: newArray})
    }

    const changeItem = () => {
        setValue(value.title)
        setEdit(!edit)
    }

    const changeItemValue = () => {
        if(Boolean(inputValue)) {
            dispatch({type: "CHANGE_VALUE_ELEMENT", index: id, value: inputValue})
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
                { value.body && <NavLink itemId={id} /> }
            </div>
            <div className="icons">
                <ChangeElements/>
                <i onClick={removeItem} className="red fas fa-trash-alt"></i>
            </div>
        </div>
    )
}

export default Item