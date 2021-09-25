import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import ControlPanel from './components/controlPanel/ControlPanel'
import ItemList from "./components/itemlist/ItemList"
import SearchPanel from './components/searchPanel/SearchPanel'
import getPosts from './services/services'

import 'antd/dist/antd.css'
import "./App.css"

const App = () => {
    const filteredItemList = useSelector(state => state.filterItemList)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPosts())
    }, [dispatch])

    return (
        <div className="container">
          <ControlPanel/>
          <SearchPanel/>
          {
            filteredItemList.length ? 
            <ItemList posts={filteredItemList} /> :
            <h1>Posts are not found</h1>
          }
        </div>
    )
}

export default App