const data = {
  totalPosts: 0,
  itemList: [],
  page: 1,
  error: false,
  loading: true
}

const reducer = (state = data, action) => {
  switch (action.type) {
    case "GET_ALL_POSTS":
      return {
        ...state,
        totalPosts: action.totalPosts
      }
    case "GET_POSTS":
      return {
        ...state,
        itemList: action.response,
        loading: true
      }
    case "POST":
      return {
        ...state,
        itemList: [...state.itemList]
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
      case "LOADING":
        return {
          ...state,
          loading: !state.loading
        }
      default:
        return {
          ...state
        }
  }
}


export default reducer