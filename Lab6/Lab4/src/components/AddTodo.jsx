import { useState } from 'react'

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter ToDo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add ToDo</button>
    </form>
  )
}

export default AddTodo




