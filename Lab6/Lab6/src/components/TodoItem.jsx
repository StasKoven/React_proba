import React, { useState } from 'react'

const TodoItem = ({ todo, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.title)
  const [error, setError] = useState('')

  const handleEditClick = () => {
    if (isEditing) {
      if (editTitle.trim() === '') {
        setError('Title is required')
        return;
      }
      if (editTitle !== todo.title) {
        onEdit(todo.id, editTitle)
      }
      setError('');
    }
    setIsEditing(!isEditing)
  };

  const handleInputChange = (e) => {
    setEditTitle(e.target.value);
  };

  return (
    <li className="todo-item">
      <div className="text-and-input">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editTitle}
              onChange={handleInputChange}
              className={`edit-input ${error ? 'input-error' : ''}`}
            />
            {error && <p className="error-message">{error}</p>}
          </>
        ) : (
          <span className="todo-text">{todo.title}</span>
        )}
      </div>
      <div className="buttons">
        <button className="edit-btn" onClick={handleEditClick}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="delete-btn" onClick={() => onRemove(todo.id)}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default TodoItem
