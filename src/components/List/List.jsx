import React  from 'react'

import Item from '../Item/Item'
import cl from './List.module.scss'


const List = ({ todos, activeChanger, deleteTodo }) => {
  return (
    <main className={cl.list}>
      {
        todos.length ?
          todos.map((item) => (
            <div className={cl.list__item} key={item.id} onClick={() => activeChanger(item.id)}>
              <Item item={item} deleteTodo={deleteTodo}/>
            </div>
          ))
          :
          <h2 className={cl.list__warning}>Задач нет</h2>
      }
    </main>
  )
}

export default List;