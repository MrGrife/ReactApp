import { useMemo } from "react"

const useFilter = (itemList, value) => {
    const sortedPost = useMemo(() => {
        if(value) {
            return itemList.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
        }

        return itemList
    }, [itemList, value])

    return sortedPost
}

export default useFilter