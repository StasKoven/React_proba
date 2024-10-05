import React from 'react'
import AddTodo from './AddTodo'
import SearchTodo from './SearchTodo'
import ToDoList from './ToDoList'
import useGetAllToDo from '../hooks/useGetAllToDo'
import Loader from './Loader'

const Layout = () => {
  const { isLoading, todos, error, addTodo, removeTodo, handleSearch } = useGetAllToDo();

  const handleEditTodo = (id, newTitle) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setTodos(updatedTodos)
  }

  return (
    <div className="layout">
      <h1>ToDo App</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <Loader isLoading={isLoading}>
          <AddTodo onAdd={addTodo} />
          <SearchTodo onSearch={handleSearch} />
          <ToDoList
            todos={todos}
            onRemove={removeTodo}
            onEdit={handleEditTodo}
          />
        </Loader>
      )}
    </div>
  )
}

export default Layout
