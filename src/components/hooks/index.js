import { useState, useMemo } from "react"
import {  useSelector } from "react-redux"

const useInput = () => {
    const [inputValue, setValue] = useState("")

    const onInput = (e) => setValue(e.target.value)

    return {inputValue, onInput, setValue}
}

const useFilter = () => {
    const { itemList, term } = useSelector(state => state)

    const filterItemList = itemList.filter(item => item.title.toLowerCase().includes(term))

    return filterItemList
}



export {
    useInput,
    useFilter
}