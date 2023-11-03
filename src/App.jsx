import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState(['I hate react']);
  const [newTodo, setNewTodo] = useState('');

  const removeItem = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editItem = (index) => {
    const updatedTodo = prompt('Edit Text:', todos[index]);
    if (updatedTodo) {
      const updatedTodos = [...todos];
      updatedTodos[index] = updatedTodo;
      setTodos(updatedTodos);
    }
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown} // Listen for Enter key
        placeholder="Add todo"
      />
      <button onClick={handleAddTodo}>Enter Adds Too</button>
      <TodoList todos={todos} removeItem={removeItem} editItem={editItem} />
    </div>
  );
};

export default App;
