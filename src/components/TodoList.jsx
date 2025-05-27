import TodoItem from './TodoItem';

function TodoList({ todos, onDelete }) {
    if (todos.length === 0) {
        return <p className="text-center text-gray-500">Список порожній</p>;
    }

    return (
        <>
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
                ))
            }
        </>
    );
}

export default TodoList;