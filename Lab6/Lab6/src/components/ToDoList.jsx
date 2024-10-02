import TodoItem from './TodoItem';

function ToDoList({ todos, onRemove, onEdit }) {
  return (
    <ul>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        ))
      ) : (
        <li>No ToDos available</li>
      )}
    </ul>
  );
}

export default ToDoList
