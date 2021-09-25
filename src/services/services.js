const getPosts = () => {
    return (dispatch, getState) => {
        if(getState().itemList.length === 0) {
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
                .then(response => response.json())
                .then(itemList => dispatch({type: "GET_POSTS", itemList: itemList}))
        }
        
    }    
}

export default getPosts