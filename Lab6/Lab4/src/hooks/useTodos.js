import { useState } from 'react'

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');

  const addTodo = async (title) => {
    if (title.trim()) {
      const newTodo = {
        id: Date.now(),
        title,
      };

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
          method: 'POST',
          body: JSON.stringify(newTodo),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const createdTodo = await response.json();
        setTodos((prevTodos) => [...prevTodos, createdTodo]);
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  };

  const removeTodo = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleSearch = (query) => {
    setSearch(query);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return {
    todos: filteredTodos,
    addTodo,
    removeTodo,
    handleSearch,
    setTodos,
  };
};


export default useTodos;
