import React from 'react';

const TodoItem = ({ todo, onRemove, onEdit }) => {
  return (
    <div className='listbuttons'>
      <span>{todo}</span>
      <button onClick={onRemove}>X</button>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};

export default TodoItem;
