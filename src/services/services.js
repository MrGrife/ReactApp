import axios from 'axios';

const _url = `http://localhost:3000/posts`

const getAllPosts = () => {
    return dispatch => {
        axios.get(_url)
            .then(response => dispatch({type: "GET_ALL_POSTS", totalPosts: response.data.length}),
            () => dispatch({type: "ERROR"}))
    }
}

const getPosts = (page = 1) => {
    return dispatch => {
        axios.get(_url, {
            params: {
                _limit: 10,
                _page: page
            }
        })
            .then(response => dispatch({type: "GET_POSTS", response: response.data}),
            () => dispatch({type: "ERROR"}))
            .finally(() => dispatch({type: "LOADING"}))
    }
}


const postData = (title, description) => {
    return dispatch => {
        axios.post(_url, {
            title: title,
            body: description
        })
        .then(newItem => {
            dispatch({type: "POST", newItem: newItem.data})
        })
    }
}

const changePost = (id, inputValue) => {
    return dispatch => {
        axios.patch(`${_url}/${id}`, { title: inputValue })
            .then(() => dispatch({type: "CHANGE_VALUE_ELEMENT", index: id, value: inputValue}))
    }
} 

const deletePost = (itemList, id) => {
    return dispatch => {
        axios.delete(`${_url}/${id}`)
            .then(() => {
                const newItemList = itemList.filter(item => item.id !== id)
                return dispatch({type: "DELETE", newItemList: newItemList})
            })
    }
}

export {
    getPosts,
    postData,
    getAllPosts,
    changePost,
    deletePost
}