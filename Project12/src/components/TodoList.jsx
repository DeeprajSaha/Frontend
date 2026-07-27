import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useSelector((state) => state.todo.todos);

    return (
        <div className="max-w-xl mx-auto mt-8">
            {todos.length === 0 ? (
                <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center shadow-sm">
                    <h2 className="text-2xl font-semibold text-gray-700">
                        No Todos Yet
                    </h2>
                    <p className="mt-2 text-gray-500">
                        Add your first task to get started.
                    </p>
                </div>
            ) : (
                <ul className="space-y-4">
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TodoList;