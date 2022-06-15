import React from 'react'
import cl from './Item.module.scss'
import {GoCheck} from 'react-icons/go';
import {MdOutlineCancel} from 'react-icons/md';

const Item= ({ item, deleteTodo }) => {
    return (
        <div className={cl.item}>
            <div className={cl.item__done}>
                {item.active === 1 ?
                   <GoCheck  size={24}/>
                    :
                    null
                }
            </div>
            <h3 style={{ textDecoration: item.active === 1 ? 'line-through' : '' }} className={cl.item__title}>
                {item.title}
            </h3>
            <span onClick={() => deleteTodo(item.id)} className={cl.item__delete}>
                <MdOutlineCancel size={32}/>
            </span>
        </div>
    )
}

export default Item