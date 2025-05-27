function TodoItem({ todo, onDelete, onToggle }) {
  const parentContainer = "flex justify-between items-center p-2 border-2";
   
  return (
    <div className={
      todo.completed
      ? `${parentContainer} bg-green-400 m-2`
      : `${parentContainer} bg-red-100 m-2`
      }>
      <div>
        <input
          className="mr-2"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)} />
        <span className={
          todo.completed
            ? "line-through text-black-500"
            : "font-bold"} >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
      >❌</button>
    </div>
  );
}

export default TodoItem;