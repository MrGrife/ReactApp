const data = {
  itemList: [],
  error: false
}

const reducer = (state = data, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        itemList: [...action.itemList]
      }
    case "POST":
      return {
        ...state,
        itemList: [...state.itemList, {...action.newItem}]
      }
      case "DELETE":
        return {
          ...state,
          itemList: action.newItemList
        }
      case "CHANGE_VALUE_ELEMENT":
        const newItemsArray = state.itemList.map(item => item.id === action.index ? {...item, title: action.value} : item )

        return {
          ...state,
          itemList: [
            ...newItemsArray
          ]
        }
      case "ERROR":
        return {
          ...state,
          error: true
        }
      default:
        return {
          ...state
        }
  }
}


export default reducer