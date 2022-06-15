import React, {  useState } from 'react';
import {BiChevronDownCircle} from 'react-icons/bi';
import cl from './Add.module.scss';



const Add  = ({ setTodos, todos }) => {
  const [value, setValue] = useState('')

  const changeValue = (e) => {
    setValue(e.target.value)
  }

  const createTodo = (e) => {
    e.preventDefault()
    if (value.length > 0) {
      const newTodo = {
        title: value,
        id: Date.now(),
        active: 2
      }
      setTodos([...todos, newTodo])
      setValue('')
    }
  }

  return (
    <form className={cl.form}>
        <button onClick={e => createTodo(e)} className={cl.form__button}><BiChevronDownCircle size={32}/></button>
        <input value={value} onChange={e => changeValue(e)} className={cl.form__input} placeholder='What need' />
      
    </form>
  )
}

export default Add;