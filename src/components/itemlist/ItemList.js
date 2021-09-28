import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Item from "../item/Item"

import "./style.css"

const ItemList = ({ posts, error }) => {
    if(error) {
        return <h1>ERROR</h1>
    }

    if(!posts.length) {
        return <h1 style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>Posts not found</h1>
    }

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