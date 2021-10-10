import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Item from "../item/Item"

import "./style.css"

const styles = {
    textAlign: "center",
    marginTop: "50px"
}

const ItemList = ({ posts, error }) => {
    if(error) {
        return <h1 style={styles}>ERROR</h1>
    }

    if(!posts.length) {
        return <h1 style={styles}>Posts not found</h1>
    }

    return (
        <div className="items-list">
            <TransitionGroup>
                {
                    posts.map(item => 
                        <CSSTransition
                            key={item.id}
                            timeout={500}
                            classNames="item"
                        >
                            <Item value={item} idELem={item.id} />
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
        </div>
    )
}

export default ItemList