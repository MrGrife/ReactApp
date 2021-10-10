import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { Button } from 'antd';

import "./post.css"

const Post = ({id}) => {
  const itemList = useSelector(state => state.itemList)
  
  const postItem = itemList.find(item => item.id === Number(id))
  
  return (
    <div className="post-item">
      <div className="title">
        {postItem.title}
      </div>
      <div className="description">
        {postItem.body}
        <Button className="post-item_button" type="primary">
          <Link to="/">Go back</Link>
        </Button>
      </div>
    </div>
  )
};

export default Post;
