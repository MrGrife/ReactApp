import React from 'react'
import { useSelector } from "react-redux"
import ControlPanel from './components/controlPanel/ControlPanel'
import ItemList from "./components/itemlist/ItemList"
import SearchPanel from './components/searchPanel/SearchPanel'

import 'antd/dist/antd.css'
import "./App.css"

const App = () => {
    const filteredItemList = useSelector(state => state.filterItemList)
    console.log(filteredItemList);
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