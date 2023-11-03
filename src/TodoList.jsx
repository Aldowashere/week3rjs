import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeItem, editItem }) => {
  return (
    <div className='part1'>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onRemove={() => removeItem(index)}
          onEdit={() => editItem(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
