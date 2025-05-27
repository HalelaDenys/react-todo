import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onToggle }) {
    if (todos.length === 0) {
        return <p className="text-center text-black-500">The list is empty</p>;
    }

    return (
        <>
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} />
                ))
            }
        </>
    );
}

export default TodoList;