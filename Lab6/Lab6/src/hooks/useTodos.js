  import { useState } from 'react'

  const useTodos = () => {
    const [todos, setTodos] = useState([])
    const [search, setSearch] = useState('')

    const addTodo = (title) => {
      if (title.trim()) {
        const newTodo = {
          id: Date.now(),
          title,
        }
        setTodos((prevTodos) => [...prevTodos, newTodo]);
      }
    }

    const removeTodo = (id) => {
      setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    }

    const handleSearch = (query) => {
      setSearch(query)
    }

    const filteredTodos = todos.filter((todo) =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    )

    return {
      todos: filteredTodos,
      addTodo,
      removeTodo,
      handleSearch,
      setTodos,
    }
  }

  export default useTodos;
