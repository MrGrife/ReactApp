import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyInput from '../inputComponent/MyInput'
import { useInput } from '../hooks'

const SearchPanel = () => {
    const dispatch = useDispatch()
    const { inputValue, onInput }  = useInput()
    const { filterItemList } = useSelector(state => state)
    
    useEffect(() => {
        dispatch({type: "FILTER", inputValue: inputValue.toLowerCase(), filteredArray: filterItemList})
    }, [inputValue, dispatch, filterItemList])

    return (
        <div style={{display: "flex"}}>
            <MyInput
                className="styled-input"
                value={inputValue}
                onInput={onInput}
                placeholder="search..."
                />
        </div>
    )
}

export default SearchPanel