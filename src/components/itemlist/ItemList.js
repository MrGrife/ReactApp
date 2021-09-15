import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Item from "../item/Item"
import { useFilter } from '../hooks'

import "./style.css"

const ItemList = () => {
    const filterItemList = useFilter()

    return (
        <div className="items-list">
            <div>
                <TransitionGroup>
                    {
                        filterItemList.map((item, id) => 
                            <CSSTransition
                                key={item.id}
                                timeout={500}
                                classNames="item"
                            >
                                <Item value={item} idELem={item.id} id={id} />
                            </CSSTransition>
                        )
                    }
                </TransitionGroup>
            </div>
        </div>
    )
}

export default ItemList