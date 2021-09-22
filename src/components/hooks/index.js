import { useState } from "react"

const useInput = () => {
    const [inputValue, setValue] = useState("")

    const onInput = (e) => setValue(e.target.value)

    return {inputValue, onInput, setValue}
}

export {
    useInput
}