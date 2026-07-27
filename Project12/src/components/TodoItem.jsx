import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, updateTodo } from "../features/todoSlice";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleSave = () => {
        if (editText.trim() === "") return;

        dispatch(
            updateTodo({
                id: todo.id,
                text: editText,
            }),
        );

        setIsEditing(false);
    };

    return (
        <li className="flex items-center justify-between rounded-xl bg-white p-4 shadow-md hover:shadow-lg transition">
            <div className="flex flex-1 items-center gap-4">
                {/* Toggle Complete */}
                <div
                    onClick={() => dispatch(toggleTodo(todo.id))}
                    className={`h-5 w-5 cursor-pointer rounded-full border-2 ${
                        todo.completed
                            ? "border-green-500 bg-green-500"
                            : "border-gray-400"
                    }`}
                ></div>

                {/* Todo Text / Input */}
                {isEditing ? (
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="flex-1 rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                    />
                ) : (
                    <span
                        className={`flex-1 text-lg ${
                            todo.completed
                                ? "line-through text-gray-400"
                                : "text-gray-800"
                        }`}
                    >
                        {todo.text}
                    </span>
                )}
            </div>

            <div className="ml-4 flex gap-2">
                {isEditing ? (
                    <button
                        onClick={handleSave}
                        className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="rounded-lg bg-yellow-400 px-4 py-2 hover:bg-yellow-500"
                    >
                        Edit
                    </button>
                )}

                <button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
