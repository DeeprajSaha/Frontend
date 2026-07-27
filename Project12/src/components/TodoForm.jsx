import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const TodoForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim() === "") return;

        dispatch(addTodo(text));

        setText("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-3 max-w-xl mx-auto mt-10"
        >
            <input
                type="text"
                placeholder="Enter your task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />

            <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
            >
                Add
            </button>
        </form>
    );
};

export default TodoForm;