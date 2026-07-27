import { createSlice } from "@reduxjs/toolkit";

const saveTodos = JSON.parse(localStorage.getItem("todos")) || []

const initialState = {
    todos: saveTodos,
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            });

            localStorage.setItem("todos", JSON.stringify(state.todos))
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );

            localStorage.setItem("todos", JSON.stringify(state.todos))
        },

        updateTodo: (state, action) => {
            let { id, text } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);

            if (todo) {
                todo.text = text;
            }
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },

        toggleTodo: (state, action) => {
            const todo = state.todos.find(
                (todo) => todo.id === action.payload
            );

            if (todo) {
                todo.completed = !todo.completed;
            }

            localStorage.setItem("todos", JSON.stringify(state.todos))
        }
    }
});


export const { addTodo, deleteTodo, toggleTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer