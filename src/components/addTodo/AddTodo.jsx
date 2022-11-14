import React, { useState } from 'react'
import TodoList from '../todoList/TodoList'

const AddTodo = () => {

  const [todos, setTodos] = useState([]);
  const [index, setIndex] = useState(0);
  
  const initialTodo = {
    id: index,
    name: ''
  };

  const [todo, setTodo] = useState(initialTodo);

  const resetInput = () => {
    setTodo(initialTodo);
  };

  const addTodo = (e) => {
    e.preventDefault();
    todo.name !== '' &&
      setTodos([...todos, todo]);
      resetInput();
      setIndex(index + 1);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(x => x.id !== id))
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input onChange={(e) => setTodo({id: index, name: e.target.value})} value={todo.name} type='text'/>
        <input type='submit'/>
      </form>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default AddTodo