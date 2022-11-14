import React, { useState } from 'react';

import './todo.css';

const Todo = ({ todo, index, deleteTodo}) => {

  const [check, setCheck] = useState(false);

  return (
    <li className='todo' key={index}>
      <h3 className={check ? 'checked' : ''} onClick={() => setCheck(!check)}>{todo.name}</h3>
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
    </li>
  )
}

export default Todo;
