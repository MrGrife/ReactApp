import React, { useEffect, useState, useRef, useMemo } from 'react'
import { useSelector, useDispatch } from "react-redux"
import ControlPanel from './components/controlPanel/ControlPanel'
import ItemList from "./components/itemlist/ItemList"
import Arrow from './components/arrow/Arrow'
import SearchPanel from './components/searchPanel/SearchPanel'
import { getPosts, getAllPosts } from './services/services'
import Loader from './components/UI/loader/loader'
import useFilter from './hooks/useFilter'
import { Pagination } from 'antd'

import 'antd/dist/antd.css'
import "./App.css"

const App = () => {
    const { totalPosts, itemList, error, loading } = useSelector(state => state)
    const [ value, setValue ] = useState('')
    const [ page, setPage ] = useState(1)
    const sortedPost = useFilter(itemList, value)
    const dispatch = useDispatch()
    // const lastElem = useRef()
    console.log(page)
    useEffect(() => {
      if(!itemList.length) {
        setPage(page => page - 1)
      }
      dispatch(getAllPosts())
    }, [dispatch, itemList])

    useEffect(() => {
      dispatch(getPosts(page))
    }, [dispatch, page])

    // useObserver(lastElem, itemList.length < totalPosts, loading, useCallback(() => {
    //   return setPage(page => page + 1)
    // }, []))

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
          <Arrow/>
          <Pagination 
            current={page}
            showSizeChanger={false} 
            onChange={page => setPage(page)}
            total={totalPosts}
          />
          {/* <div ref={lastElem} style={{height: 40}} /> */}
        </div>
    )
}

export default App