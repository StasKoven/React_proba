import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import SearchTodo from './SearchTodo'
import ToDoList from './ToDoList'
import useTodos from '../hooks/useTodos'
import useGetAllToDo from '../hooks/useGetAllToDo'
import Loader from './Loader'

const Layout = () => {
  const { todos, addTodo, removeTodo, handleSearch, setTodos } = useTodos();
  const { isLoading, data, error } = useGetAllToDo();

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data, setTodos]);

  return (
    <div className="layout">
      <h1>ToDo App</h1>

      {isLoading ? (
        <p>Loading ToDos...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <Loader isLoading={isLoading}>
          <AddTodo onAdd={addTodo} />
          <SearchTodo onSearch={handleSearch} />
          <ToDoList todos={todos} onRemove={removeTodo} />
        </Loader>
      )}
    </div>
  );
};

export default Layout
