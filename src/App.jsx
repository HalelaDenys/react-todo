import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./components/TodoList";

function App() {
    // hooks
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });
    const [text, setText] = useState('');

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);

    //fn
    const handleAddTodos = () => {
        if (text.trim() !== "") {
            const newTodo = {
                id: uuidv4(),
                text: text.trim(),
                completed: false,
            };
            setTodos([...todos, newTodo]);
            setText("");
        }
        return;
    };
    
    const onKeyDownEnter = (event) => {
        if (event.key === "Enter") {
            handleAddTodos();
        }
    };
    
    const handleDeleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id))
    };


    const handleToggle = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-4 bg-red-200 border-2 mt-4">
            <h1 className="text-2xl font-bold mb-4 text-center">TODO List</h1>
            <div className="flex gap-2 mb-4 mx-2">
                <input
                    className="border-2 p-2 flex-1"
                    placeholder="new todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={onKeyDownEnter}
                />
                <button
                    className="bg-blue-400 text-black px-4 py-2 border-2 hover:bg-blue-700"
                    onClick={handleAddTodos}>
                    Add todo
                </button>
            </div>
            <TodoList todos={todos} onDelete={handleDeleteTodo} onToggle={handleToggle} />
        </div>
    );
}

export default App;
