const getPosts = (limit = 5, page = 1) => {
    const _url = `https://jsonplaceholder.typicode.com/`

    return (dispatch, getState) => {
        if(getState().itemList.length === 0) {
            fetch(`${_url}posts?_limit=${limit}&_page=${page}`)
                .then(response => response.json())
                .then(itemList => dispatch({type: "GET_POSTS", itemList: itemList}))
                .catch(error => dispatch({type: "ERROR"}))
        }
    }
}

const postData = (title, description) => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: description,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(newItem => dispatch({type: "POST", newItem: newItem}))
    }
}

export {
    getPosts,
    postData
}