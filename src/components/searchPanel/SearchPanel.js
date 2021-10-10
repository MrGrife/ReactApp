import React from 'react'
import MyInput from '../UI/inputComponent/MyInput'

const SearchPanel = ({ value, setValue }) => {
    return (
        <div style={{display: "flex"}}>
            <MyInput
                className="styled-input"
                value={value}
                onInput={(e) => setValue(e.target.value)}
                placeholder="search..."
                />
        </div>
    )
}

export default SearchPanel