function TodoItem({ todo, onDelete }) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <span>{todo.text}</span>
      <button
        onClick={() => onDelete(todo.id)}
      >❌</button>
    </div>
  );
}

export default TodoItem;