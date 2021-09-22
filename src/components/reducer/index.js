const randomId = () => {
  return Math.floor(Math.random() * 1000)
}

const data = {
  itemList: [{
      title: "I'm learning React",
      id: randomId()
    },
    {
      title: "React + Redux",
      id: randomId()
    }, {
      title: "Backend...",
      id: randomId()
    }
  ],
  filterItemList: []
}

const reducer = (state = data, action) => {
  switch (action.type) {
    case "POST":
      return {
        ...state,
        itemList: [...state.itemList, {...action.newItem, id: randomId()}]
      }
      case "DELETE":
        return {
          ...state,
          itemList: action.newItemList
        }
      case "CHANGE_VALUE_ELEMENT":
        const itemInd = state.itemList.find((item, id) => action.index === id)
        const newItem = {
          ...itemInd,
          title: action.value
        }

        const first = state.itemList.slice(0, action.index)
        const second = state.itemList.slice(action.index + 1)

        return {
          ...state,
          itemList: [
            ...first,
            newItem,
            ...second
          ]
        }
      case "FILTER":
        return {
          ...state,
          filterItemList: action.filteredArray
        }
      default:
        return {
          ...state
        }
  }
}


export default reducer
