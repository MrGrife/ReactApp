import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Item from "../item/Item"

import "./style.css"

const ItemList = ({posts}) => {
    return (
        <div className="items-list">
            <div>
                <TransitionGroup>
                    {
                        posts.map((item, id) => 
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