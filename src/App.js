import React, {useState, useEffect} from "react";
import Filters from "./components/Filters/Filters";
import List from "./components/List/List";
import Add from "./components/Add/Add";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
})
const [newTodos, setNewTodos] = useState([])
const [activeFilter, setActiveFilter] = useState(0)

useEffect(() => {
  setNewTodos(todos.filter((item) => item.active === activeFilter))
}, [activeFilter, todos])

const activeChanger = (id) => {
  setTodos(state => {
    return state.map(item => {
      return item.id === id ? { ...item, active: item.active === 1 ? 2 : 1 } : item
    })
  })
}

const deleteTodo = (id) => {
  setTodos(todos.filter((item) => item.id !== id))
}


useEffect(() => {
localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])

  return (
    <div className='app'>
      <h1 className='title'>todos</h1>
      <div className='container'>
        <Add
          todos={todos}
          setTodos={setTodos}
        />
       
        <List
          activeChanger={activeChanger}
          todos={activeFilter === 0 ? todos : newTodos}
          deleteTodo={deleteTodo}
        />
         <Filters setActiveFilter={setActiveFilter} />
      </div>
    </div>
  );
}

export default App;
