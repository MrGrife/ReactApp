import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux"
import ControlPanel from './components/controlPanel/ControlPanel'
import ItemList from "./components/itemlist/ItemList"
import SearchPanel from './components/searchPanel/SearchPanel'
import { getPosts, getAllPosts } from './services/services'
import Loader from './components/UI/loader/loader'
import useFilter from './hooks/useFilter'
import useObserver from './hooks/useObserver'
import pagesCounter from "./utils/pagesCounter"

import 'antd/dist/antd.css'
import "./App.css"

const App = () => {
    const { totalPosts, itemList, error, loading } = useSelector(state => state)
    const [ value, setValue ] = useState('')
    const [ page, setPage ] = useState(1)
    const sortedPost = useFilter(itemList, value)
    const dispatch = useDispatch()
    const lastElem = useRef()

    useEffect(() => {
      dispatch(getAllPosts())
    }, [dispatch])

    useEffect(() => {
      dispatch(getPosts(page))
    }, [dispatch, page])

    useObserver(lastElem, itemList.length < totalPosts, loading, useCallback(() => {
      return setPage(page => page + 1)
    }, []))
    

    return (
        <div className="container">
          <ControlPanel/>
          <SearchPanel value={value} setValue={setValue} />
          {
            <ItemList posts={sortedPost} error={error} />
          }
          {
            loading && <Loader/>
          }
          <div ref={lastElem} style={{height: "40px"}} />
        </div>
    )
}

export default App