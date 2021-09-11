import React from 'react'
import ControlPanel from './components/controlPanel/ControlPanel'
import ItemList from "./components/itemlist/ItemList"
import SearchPanel from './components/searchPanel/SearchPanel'

import 'antd/dist/antd.css'
import "./App.css"

const App = () => {
    return (
        <div className="container">
            <ControlPanel/>
            <SearchPanel/>
            <ItemList/>
        </div>
    )
}

export default App