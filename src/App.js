import React, { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from "react-redux"
import ControlPanel from './components/controlPanel/ControlPanel'
import ItemList from "./components/itemlist/ItemList"
import SearchPanel from './components/searchPanel/SearchPanel'
import { getPosts } from './services/services'
import Loader from './components/loader/loader'

import 'antd/dist/antd.css'
import "./App.css"

const App = () => {
    const { itemList, error } = useSelector(state => state)
    const [loading, setLoading] = useState(true)
    const [ value, setValue ] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPosts())
      setLoading(false)
    }, [dispatch])

    const sortedPost = useMemo(() => {
        if(value) {
            return itemList.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
        }

        return itemList
    }, [value, itemList])

    
    return (
        <div className="container">
          <ControlPanel/>
          <SearchPanel value={value} setValue={setValue} />
          {
            loading ? <Loader/> : <ItemList posts={sortedPost} error={error} />
          }
        </div>
    )
}

export default App