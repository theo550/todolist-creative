import React from 'react';

import Todo from '../todo/Todo';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <Todo key={index} todo={todo} deleteTodo={deleteTodo}/>
          )
        })}
      </ul>
    </div>
  );
};

export default TodoList;
